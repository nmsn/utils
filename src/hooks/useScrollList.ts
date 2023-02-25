import { useState } from 'react';

import useLoading, { ReqParamType } from './useLoading';

type ResScrollListType<L> = {
  list: L[];
  hasNextPage: boolean;
  pageSize: number;
  pageNum: number;
};

const useScrollList = <L, K>({
  asyncFunc,
  onCallback,
  onSuccessCallback,
  onErrCallback,
}: ReqParamType<ResScrollListType<L>, K>) => {
  const [list, setList] = useState<L[]>([] as L[]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [pageNum, setPageNum] = useState<number>(0);

  const { exec, loading, isFirstLoading } = useLoading({
    asyncFunc,
    onCallback,
    onErrCallback,
    onSuccessCallback,
  });

  const resultExec = async (params: K) => {
    try {
      const result = await exec({
        // TODO 顺序有待调整，包括外部传入 pageNum 的情况
        pageNum: pageNum + 1,
        ...params,
      });
      const { list = [], hasNextPage = false, pageNum: innerPageNum = 0 } = result || {};

      setPageNum(innerPageNum);
      setHasNextPage(hasNextPage);
      if (innerPageNum > 1) {
        setList(pre => [...pre, ...list]);
      } else {
        setList(list);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return {
    loading,
    isFirstLoading,
    exec: resultExec,
    list,
    hasNextPage,
    pageNum,
    /** 没有数据的标志（且不在加载中） */
    isNoDataFlag: !list.length && !loading,
  };
};

export default useScrollList;
