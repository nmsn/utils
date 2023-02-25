import React from 'react';
import { message } from 'antd';

import { useLoading } from '@nmsn/utils';

const func = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: 1, flag: true, errorMsg: '', errorCode: '' });
    }, 1000);
  });
};

export default () => {
  const { exec, loading, isFirstLoading } = useLoading({
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
    </>
  );
};
