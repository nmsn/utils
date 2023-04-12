import { renderHook } from '@testing-library/react';

import useOpen from '.';

describe('useOpen', () => {
  it('test useOpen', async () => {
    const fn = jest.fn();
    const { rerender } = renderHook((state: boolean) => useOpen(state, fn), {
      initialProps: false,
    });

    expect(fn).toBeCalledTimes(0);

    rerender(true);

    expect(fn).toBeCalledTimes(1);

    rerender(false);

    expect(fn).toBeCalledTimes(1);

    rerender(true);

    expect(fn).toBeCalledTimes(2);
  });
});
