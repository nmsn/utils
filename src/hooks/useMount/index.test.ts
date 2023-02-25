import { renderHook } from '@testing-library/react';

import useMount from './';

describe('useMount', () => {
  it('test mount', async () => {
    const fn = jest.fn();
    const { rerender, unmount } = renderHook(() => useMount(fn));
    expect(fn).toBeCalledTimes(1);

    rerender();
    expect(fn).toBeCalledTimes(1);

    unmount();
    expect(fn).toBeCalledTimes(1);

    renderHook(() => useMount(fn)).unmount();
    expect(fn).toBeCalledTimes(2);
  });
});
