import { useRef } from 'react';

const useNoRenderState = <S>(initValue: S) => {
  const ref = useRef(initValue);

  const setState = (val: S) => {
    if (typeof val === 'function') {
      ref.current = val(ref.current);
    } else {
      ref.current = val;
    }
  };

  // ref 不会自动刷新页面，因此不能直接使用渲染页面，使用 get 函数获取最新的值
  const getState = () => {
    return ref.current;
  };

  return [getState, setState] as const;
};

export default useNoRenderState;
