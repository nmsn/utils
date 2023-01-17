import { useState, useRef, useCallback, useEffect } from 'react';

const useStateCallback = <T>(
  initialState: T,
): [T, (state: T, callback?: (state: T) => void) => void] => {
  const [state, setState] = useState(initialState);
  const cbRef = useRef<((state: T) => void) | undefined>(undefined); // init mutable ref container for callbacks

  const setStateCallback = useCallback((state: T, callback?: (state: T) => void) => {
    cbRef.current = callback;
    setState(state);
  }, []);

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = undefined;
    }
  }, [state]);

  return [state, setStateCallback];
};

export default useStateCallback;
