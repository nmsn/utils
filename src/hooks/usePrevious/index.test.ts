import { renderHook } from '@testing-library/react';

import usePrevious from '../../hooks/usePrevious';

describe('usePrevious', () => {
  it('test usePrevious', async () => {
    const { rerender, result } = renderHook(({ state }) => usePrevious(state), {
      initialProps: { state: 0 },
    });

    const preVal = result.current;

    expect(preVal).toBe(undefined);

    rerender({ state: 1 });

    const preVal2 = result.current;

    expect(preVal2).toBe(0);
  });
});
