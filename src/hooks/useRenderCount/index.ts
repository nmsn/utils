import { useEffect, useRef } from 'react';

const useRenderCount = () => {
  const isFirstRender = useRef(true);
  const renderCount = useRef(0);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);
  useEffect(() => {
    if (!isFirstRender.current) renderCount.current++;
  });

  return [renderCount.current, isFirstRender.current];
};

export default useRenderCount;
