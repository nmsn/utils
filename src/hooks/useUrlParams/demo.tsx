import React from 'react';

import { useUrlParams } from '@nmsn/utils';

export default () => {
  const [state, set] = useUrlParams();

  console.log(state);

  return (
    <>
      <div>{state.num}</div>
      <button onClick={() => set({ ...state, num: +(state.num || 0) + 1 })}>num+1(参数)</button>
      <button onClick={() => set(pre => ({ ...pre, num: +(pre.num || 0) + 1 }))}>
        num+1(参数为函数)
      </button>
      <button onClick={() => set({ key: state.key + 2 })}>num+1(参数)</button>
      <button onClick={() => set()}>清空</button>
    </>
  );
};
