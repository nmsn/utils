import { act, renderHook } from '@testing-library/react';

import useMergeValue from './';

const setUp = ({
  defaultStateValue,
  defaultValue,
  value,
}: {
  defaultStateValue?: string;
  defaultValue?: string;
  value?: string;
}) =>
  renderHook(
    ({ defaultValue, value }: { defaultValue?: string; value?: string }) =>
      useMergeValue(defaultStateValue, { defaultValue, value }),
    {
      initialProps: { defaultValue, value } as { defaultValue?: string; value?: string },
    },
  );

describe('useMergeValue', () => {
  it('useMergeValue with defaultStateValue', async () => {
    const { result } = setUp({ defaultStateValue: '1' });

    expect(result.current?.[0]).toBe('1');
    expect(result.current?.[2]).toBe('1');

    act(() => {
      result.current?.[1]('2');
    });

    expect(result.current?.[0]).toBe('2');
    expect(result.current?.[2]).toBe('2');

    act(() => {
      result.current?.[1](undefined);
    });

    expect(result.current?.[0]).toBe(undefined);
    expect(result.current?.[2]).toBe(undefined);
  });

  it('useMergeValue with defaultStateValue/defaultValue', async () => {
    const { result } = setUp({ defaultStateValue: '1', defaultValue: '2' });

    expect(result.current?.[0]).toBe('2');
    expect(result.current?.[2]).toBe('2');

    act(() => {
      result.current?.[1]('3');
    });

    expect(result.current?.[0]).toBe('3');
    expect(result.current?.[2]).toBe('3');
  });

  it('useMergeValue with defaultStateValue/value', async () => {
    const { result, rerender } = setUp({ defaultStateValue: '1', value: '2' });

    expect(result.current?.[0]).toBe('2');
    expect(result.current?.[2]).toBe('2');

    act(() => {
      result.current?.[1]('3');
    });

    expect(result.current?.[0]).toBe('2');
    expect(result.current?.[2]).toBe('3');

    act(() => {
      result.current?.[1](undefined);
    });

    expect(result.current?.[0]).toBe('2');
    expect(result.current?.[2]).toBe(undefined);

    rerender({ value: undefined });

    expect(result.current?.[0]).toBe(undefined);
    expect(result.current?.[2]).toBe(undefined);
  });
});
