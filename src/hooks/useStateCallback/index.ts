import { useCallback, useEffect, useRef, useState } from 'react';

type SetStateType<T> = (state: T, callback?: ((state: T) => void) | undefined) => void;

const useStateCallback = <T>(initialState: T): [T, SetStateType<T>] => {
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
