import { useState } from 'react';

import useLoading, { ReqParamType } from './useLoading';

const useReq = <T, K>({
  asyncFunc,
  onCallback,
  onErrCallback,
  onSuccessCallback,
}: ReqParamType<T, K>) => {
  const [data, setData] = useState<T | null>(null);

  const { exec, loading, isFirstLoading } = useLoading({
    asyncFunc,
    onCallback,
    onErrCallback,
    onSuccessCallback,
  });

  const resultExec = async (params: K) => {
    try {
      const data = await exec(params);
      setData(data);
      return Promise.resolve(data);
    } catch (err) {
      console.warn(err);
      setData(null);
      return Promise.reject(null);
    }
  };

  return { data, loading, isFirstLoading, exec: resultExec };
};

export default useReq;
