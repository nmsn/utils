import { renderHook } from '@testing-library/react';

import useDeepEqualIdentifier from './';

it('useDeepEqualIdentifier', async () => {
  const { rerender, result } = renderHook(({ state }) => useDeepEqualIdentifier(state), {
    initialProps: { state: { a: 1 } },
  });

  expect(result.current).toBe(0);

  rerender({ state: { a: 1 } });
  expect(result.current).toBe(0);

  rerender({ state: { a: 2 } });
  expect(result.current).toBe(1);
});
