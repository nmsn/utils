import { useCallback, useRef } from 'react';

const useUniqueKey = (suffix: string) => {
  const keys = useRef(new Map());

  const getUniqueKey = useCallback((key: string) => {
    let num = 0;

    if (keys.current.has(key)) {
      num = keys.current.get(key);
    }

    keys.current.set(key, num + 1);

    return `${key}${`-${suffix}`.repeat(num)}`;
  }, []);

  return [getUniqueKey];
};

export default useUniqueKey;
