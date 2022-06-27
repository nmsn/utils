import { useCallback, useState } from 'react';

const useUniqueKey = (suffix: string) => {
  const [keys, setKeys] = useState(new Set());

  const getUniqueKey = useCallback(
    (key: string) => {
      let curKey = key;
      if (keys.has(curKey)) {
        curKey = `${curKey}-${suffix}`;
      }

      setKeys(curKeys => new Set([...curKeys, curKey]));
      return key;
    },
    [keys],
  );

  return [getUniqueKey];
};

export default useUniqueKey;
