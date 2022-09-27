import { useEffect, useRef } from 'react';

const useDidUpdate = (value: any, cb: () => void) => {
  const isMounted = useRef(false);
  useEffect(() => {
    /* 防止第一次执行 */
    isMounted.current && cb?.();
  }, [value]);

  useEffect(() => {
    /* 第一次挂载 */
    isMounted.current = true;
  }, []);
};

export default useDidUpdate;
