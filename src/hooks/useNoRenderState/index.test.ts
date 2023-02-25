import { renderHook } from '@testing-library/react';

import useNoRenderState from '.';

describe('useNoRenderState', () => {
  it('test useNoRenderState', async () => {
    const { rerender, result } = renderHook(() => useNoRenderState(0));

    const [getState, setState] = result.current;

    expect(getState()).toBe(0);
    setState(1);
    expect(getState()).toBe(1);

    rerender();

    expect(getState()).toBe(1);
    setState(cur => {
      return (cur || 0) + 1;
    });
    expect(getState()).toBe(2);
  });
});
