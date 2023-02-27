import { useState } from 'react';

import useLoading, { ReqParamType, ReturnType } from '../useLoading';

type ResScrollListType<L> = {
  list: L[];
  hasNextPage: boolean;
  pageSize: number;
  pageNum: number;
  isNoData: boolean;
};

type ScrollListReturnType<L, K> = ReturnType<ResScrollListType<L>, K> & ResScrollListType<L>;

const useScrollList = <L, K>({
  asyncFunc,
  onCallback,
  onSuccessCallback,
  onErrCallback,
}: ReqParamType<ResScrollListType<L>, K>): ScrollListReturnType<L, K> => {
  const [list, setList] = useState<L[]>([] as L[]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [pageNum, setPageNum] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(0);

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
      const {
        list: newList = [],
        hasNextPage = false,
        pageNum: innerPageNum = 0,
        pageSize: innerPageSize = 0,
      } = result || {};

      setPageNum(innerPageNum);
      setPageSize(innerPageSize);
      setHasNextPage(hasNextPage);

      const newResult = innerPageNum > 1 ? [...list, ...newList] : newList;
      setList(newResult);

      return Promise.resolve({
        list: newResult,
        hasNextPage,
        pageNum,
        pageSize,
        isNoData: !list.length && !loading,
      });
    } catch (err) {
      console.warn(err);
      return Promise.reject(null);
    }
  };

  return {
    loading,
    isFirstLoading,
    exec: resultExec,
    list,
    hasNextPage,
    pageNum,
    pageSize,
    /** 没有数据的标志（且不在加载中） */
    isNoData: !list.length && !loading,
  };
};

export default useScrollList;
