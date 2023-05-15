import { useEffect, useState } from 'react';

import { getTargetElement } from '@/helper';
import { BasicTarget } from '@/types';

export interface Options {
  rootMargin?: string;
  threshold?: number | number[];
  root?: BasicTarget<Element>;
}

function useInView(target: BasicTarget, options?: Options) {
  const [state, setState] = useState<boolean>();
  const [ratio, setRatio] = useState<number>();

  useEffect(() => {
    const el = getTargetElement(target);

    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          setRatio(entry.intersectionRatio);
          setState(entry.isIntersecting);
        }
      },
      {
        ...options,
        root: getTargetElement(options?.root),
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [options?.rootMargin, options?.threshold]);

  return [state, ratio] as const;
}

export default useInView;
