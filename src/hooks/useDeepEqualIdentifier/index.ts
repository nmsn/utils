import { useRef } from 'react';
import isEqual from 'lodash-es/isEqual';

export const usePreviousValue = (value: any, initialValue = null) => {
  const cache = useRef(initialValue);
  const previousValue = cache.current;
  cache.current = value;
  return previousValue;
};

const useDeepEqual = (value: any) => {
  // 使用 value 当初始值，因此第一次调用会返回 true
  const previousValue = usePreviousValue(value, value);
  return isEqual(value, previousValue);
};

interface UseDeepEqualIdentifier {
  (value: any): number;
}

/** 判断 value 是否发生改变 */
const useDeepEqualIdentifier: UseDeepEqualIdentifier = value => {
  const identifier = useRef(0);
  const equal = useDeepEqual(value);

  if (!equal) {
    identifier.current += 1;
  }

  return identifier.current;
};

export default useDeepEqualIdentifier;
