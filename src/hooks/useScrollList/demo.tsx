import React from 'react';
import { message } from 'antd';

import { useScrollList } from '@nmsn/utils';

let num = 0;

const getFunc = (sum: 5) => () => {
  if (num < sum) {
    num += 1;
  }

  const data =
    num < sum
      ? { list: Array(10).fill(num), hasNextPage: true, pageNum: num }
      : { list: Array(10).fill(sum), hasNextPage: false, pageNum: sum };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: data, flag: true, errorMsg: '', errorCode: '' });
    }, 1000);
  });
};

export default () => {
  const { exec, loading, isFirstLoading, list, hasNextPage, pageNum } = useScrollList({
    asyncFunc: getFunc(5),
    onCallback: () => {
      message.info('finish');
    },
    onSuccessCallback: () => {
      message.success('success');
    },
    onErrorCallback: () => {
      message.error('error');
    },
  });

  return (
    <>
      <button onClick={exec}>exec</button>
      <div>loading: {loading.toString()}</div>
      <div>isFirstLoading: {isFirstLoading.toString()}</div>
      <div>hasNextPage: {hasNextPage.toString()}</div>
      <div>pageNum: {pageNum}</div>
      <div>list: {list}</div>
    </>
  );
};
