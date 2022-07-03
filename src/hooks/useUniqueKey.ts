import { useCallback, useRef } from 'react';

const useUniqueKey = (suffix: string) => {
  const keys = useRef(new Set());

  const getUniqueKey = useCallback((key: string) => {
    let curKey = key;
    if (keys.current.has(curKey)) {
      curKey = `${curKey}-${suffix}`;
    }

    keys.current = new Set([...keys.current, curKey]);
    return key;
  }, []);

  return [getUniqueKey];
};

export default useUniqueKey;
