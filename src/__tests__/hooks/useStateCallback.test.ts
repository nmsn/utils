import { act, renderHook } from '@testing-library/react';

import useStateCallback from '../../hooks/useStateCallback';

describe('useStateCallback', () => {
  it('test useStateCallback', async () => {
    const fn = jest.fn(data => data);
    const { result } = renderHook(({ state }) => useStateCallback(state), {
      initialProps: { state: 0 },
    });

    const [, setStateCallback] = result.current;

    expect(fn).toBeCalledTimes(0);

    act(() => {
      setStateCallback(1, fn);
    });

    expect(fn).toBeCalledTimes(1);

    expect(fn.mock.results[0].value).toBe(1);

    act(() => {
      setStateCallback(10, fn);
    });

    expect(fn).toBeCalledTimes(2);
    expect(fn.mock.results[1].value).toBe(10);
  });
});
