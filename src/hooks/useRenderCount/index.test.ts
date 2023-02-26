import { renderHook } from '@testing-library/react';

import useRenderCount from '../../hooks/useRenderCount';

/** get ref data when using it */
describe('useRenderCount', () => {
  it('test useRenderCount', async () => {
    const { rerender, result } = renderHook(() => useRenderCount());

    const [count, isFirst] = result.current;

    expect(isFirst).toBe(true);
    expect(count).toBe(0);

    rerender();

    const [count2, isFirst2] = result.current;
    expect(isFirst2).toBe(false);
    expect(count2).toBe(1);

    rerender();

    const [count3, isFirst3] = result.current;
    expect(isFirst3).toBe(false);
    expect(count3).toBe(2);
  });
});
