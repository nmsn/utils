import { useState, useEffect } from 'react';

export type ResType<T> = {
  data: T;
  flag: boolean;
  errorMsg: string;
  errorCode: number | string;
};

const useServiceCancel = <T, K>(service: (params: K) => Promise<ResType<T>> | ResType<T>) => {
  let hasCanceled = false;

  const exec = async (params: K) => {
    try {
      // TODO 执行阶段 axios 的取消
      const result = await service(params);

      if (hasCanceled) {
        console.warn('Request is canceled');
        return {} as ResType<T>;
      } else {
        return result;
      }
    } catch (err) {
      console.warn(err);
      return {} as ResType<T>;
    }
  };

  return {
    exec,
    cancel: () => {
      hasCanceled = true;
    },
  };
};

export type ReqParamType<T, K> = {
  service: (params: K) => Promise<ResType<T>> | ResType<T>;
  onCallback: (data: ResType<T>) => void;
  onSuccessCallback: (data: T) => void;
  onErrCallback?: (errorCode?: number | string, errorMsg?: string) => void;
  extraParams?: Record<string, any>;
};

const useLoading = <T = Record<string, any>, K = Record<string, any>>({
  service,
  onCallback,
  onErrCallback,
  onSuccessCallback,
}: ReqParamType<T, K>) => {
  const [loading, setLoading] = useState<boolean | null>(null);

  const [isFirstLoading, setIsFirstLoading] = useState(false);

  const { exec: _service, cancel } = useServiceCancel<T, K>(service);

  useEffect(
    () => () => {
      cancel();
    },
    [],
  );

  const exec = async (params: K) => {
    try {
      setLoading(pre => {
        if (pre === null) {
          setIsFirstLoading(true);
        }

        return true;
      });

      const { data, flag, errorMsg, errorCode } = await _service({ ...params });

      setLoading(false);
      setIsFirstLoading(false);

      onCallback?.({ data, flag, errorMsg, errorCode });

      if (!flag) {
        onErrCallback?.(errorCode, errorMsg);
        return Promise.reject(data);
      }

      onSuccessCallback?.(data);
      return Promise.resolve(data);
    } catch (err) {
      console.warn(err);
      return null;
    }
  };

  return { exec, loading: !!loading, isFirstLoading };
};

export default useLoading;
