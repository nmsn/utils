import { useCallback, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';

type GetStateAction<S> = () => S;

const useNoRenderState = <S>(
  initValue?: S,
): [GetStateAction<S | undefined>, Dispatch<SetStateAction<S | undefined>>] => {
  const ref = useRef(initValue);

  const setState = (val: SetStateAction<S | undefined>) => {
    if (typeof val === 'function') {
      // FIXME 类型识别问题
      ref.current = (val as any)(ref.current);
    } else {
      ref.current = val;
    }
  };

  // ref 不会自动刷新页面，因此不能直接使用渲染页面，使用 get 函数获取最新的值
  const getState = useCallback(() => {
    return ref.current;
  }, []);

  return [getState, setState];
};

export default useNoRenderState;
