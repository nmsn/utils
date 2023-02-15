import { renderHook } from '@testing-library/react';

import useUnmount from '../../hooks/useUnmount';

describe('useUnmount', () => {
  it('useUnmount should work', async () => {
    const fn = jest.fn();
    const { rerender, unmount } = renderHook(() => useUnmount(fn));
    expect(fn).toBeCalledTimes(0);

    rerender();
    expect(fn).toBeCalledTimes(0);

    unmount();
    expect(fn).toBeCalledTimes(1);
  });
});
