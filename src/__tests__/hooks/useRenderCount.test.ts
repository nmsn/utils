import { renderHook } from '@testing-library/react';
import useRenderCount from '../../hooks/useRenderCount';

/** get ref data when using it */
describe('useRenderCount', () => {
  it('test useRenderCount', async () => {
    const { rerender, result } = renderHook(() => useRenderCount());

    const [count, isFirst] = result.current;

    expect(isFirst).toBeTruthy();
    expect(count).toBe(1);

    rerender();

    const [count2, isFirst2] = result.current;
    expect(isFirst2).toBeFalsy();
    expect(count2).toBe(2);

    rerender();

    const [count3, isFirst3] = result.current;
    expect(isFirst3).toBeFalsy();
    expect(count3).toBe(3);
  });
});
