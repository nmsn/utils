import { useEffect } from 'react';

const useOpen = (visible: boolean, callback: () => void) => {
  useEffect(() => {
    if (visible) {
      callback?.();
    }
  }, [visible]);
};

export default useOpen;
