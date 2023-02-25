import { useEffect, useState } from 'react';

export type ResType<T> = {
  data: T;
  flag: boolean;
  errorMsg: string;
  errorCode: number | string;
};

const useServiceCancel = <T, K>(asyncFunc: (params: K) => Promise<ResType<T>> | ResType<T>) => {
  let hasCanceled = false;

  const exec = async (params: K) => {
    try {
      // TODO 执行阶段 axios 的取消
      const result = await asyncFunc(params);

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
  asyncFunc: (params: K) => Promise<ResType<T>> | ResType<T>;
  onCallback: (data: ResType<T>) => void;
  onSuccessCallback: (data: T) => void;
  onErrCallback?: (errorCode?: number | string, errorMsg?: string) => void;
};

export type ReturnType<T, K> = {
  exec: (params: K) => Promise<T | null>;
  loading: boolean;
  isFirstLoading: boolean;
};

const useLoading = <T = Record<string, any>, K = Record<string, any>>({
  asyncFunc,
  onCallback,
  onErrCallback,
  onSuccessCallback,
}: ReqParamType<T, K>): ReturnType<T, K> => {
  const [loading, setLoading] = useState<boolean | null>(null);

  const [isFirstLoading, setIsFirstLoading] = useState(false);

  const { exec: _asyncFunc, cancel } = useServiceCancel<T, K>(asyncFunc);

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

      const { data, flag, errorMsg, errorCode } = await _asyncFunc({ ...params });

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
