import React from 'react';
import { message } from 'antd';

import { useReq } from '@nmsn/utils';

const func = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: 1, flag: true, errorMsg: '', errorCode: '' });
    }, 1000);
  });
};

export default () => {
  const { exec, loading, isFirstLoading, data } = useReq({
    asyncFunc: func,
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
      <div>data: {data === null ? 'null' : data}</div>
    </>
  );
};
