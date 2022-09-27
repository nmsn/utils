import { renderHook, act } from '@testing-library/react';
import { useState } from 'react';
import useDidUpdate from '../../hooks/useDidUpdate';

describe('useDidUpdate', () => {
  it('just exec one time when no deps', async () => {
    const fn = jest.fn();
    const { rerender } = renderHook(state => useDidUpdate(state, fn), {
      initialProps: 1,
    });

    expect(fn).toBeCalledTimes(0);

    rerender();
    expect(fn).toBeCalledTimes(1);

    rerender();
    expect(fn).toBeCalledTimes(1);
  });

  it('deps use props', async () => {
    const fn = jest.fn();
    const { rerender } = renderHook(state => useDidUpdate(state, fn), {
      initialProps: 1,
    });

    expect(fn).toBeCalledTimes(0);

    rerender(2);
    expect(fn).toBeCalledTimes(1);

    rerender(3);
    expect(fn).toBeCalledTimes(2);
  });

  it('use setState change deps', async () => {
    const fn = jest.fn();

    const { result } = renderHook(() => {
      const [val, setVal] = useState(0);
      useDidUpdate(val, fn);

      return [setVal];
    });

    const [setVal] = result.current;

    expect(fn).toBeCalledTimes(0);

    act(() => {
      setVal(1);
    });

    expect(fn).toBeCalledTimes(1);

    act(() => {
      setVal(2);
    });
    expect(fn).toBeCalledTimes(2);
  });
});
