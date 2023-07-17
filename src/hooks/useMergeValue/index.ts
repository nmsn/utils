import { useEffect, useRef, useState } from 'react';

import usePrevious from '../usePrevious';

const isUndefined = (obj: any): obj is undefined => {
  return obj === undefined;
};

const useMergeValue = <T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
  },
): [T, React.Dispatch<React.SetStateAction<T>>, T] => {
  const { defaultValue, value } = props || {};
  const firstRenderRef = useRef(true);
  const prevPropsValue = usePrevious(value);

  const [stateValue, setStateValue] = useState<T>(
    // 初始化值的逻辑
    (() => {
      if (!isUndefined(value)) {
        return value;
      }

      if (!isUndefined(defaultValue)) {
        return defaultValue;
      }

      return defaultStateValue;
    })(),
  );

  // 清除数据的逻辑
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined && prevPropsValue !== value) {
      setStateValue(value);
    }
  }, [value]);

  const mergedValue = isUndefined(value) ? stateValue : value;

  return [mergedValue, setStateValue, stateValue];
};

export default useMergeValue;
