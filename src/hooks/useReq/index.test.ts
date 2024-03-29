import { act, renderHook } from '@testing-library/react';

import { request } from '../../hooks/useLoading/index.test';
import useReq from '../../hooks/useReq';

describe('useLoading', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const setUp = ({ asyncFunc, onCallback, onErrCallback, onSuccessCallback }: any) =>
    renderHook(() => useReq({ asyncFunc, onCallback, onErrCallback, onSuccessCallback }));

  it('test useLoading', async () => {
    const hook = setUp({
      asyncFunc: () => request({ flag: true, data: { a: 1 } }),
      onCallback: (data: any) => console.log(data),
      onErrCallback: (data: any) => console.log(data),
      onSuccessCallback: (data: any) => console.log(data),
    });

    expect(hook.result.current.loading).toBe(false);
    expect(hook.result.current.isFirstLoading).toBe(false);
    expect(hook.result.current.data).toBeNull();

    act(() => {
      hook.result.current.exec({});
    });

    expect(hook.result.current.loading).toBe(true);
    expect(hook.result.current.isFirstLoading).toBe(true);
    expect(hook.result.current.data).toBeNull();

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    expect(hook.result.current.loading).toBe(false);
    expect(hook.result.current.isFirstLoading).toBe(false);
    expect(hook.result.current.data).toEqual({ a: 1 });

    act(() => {
      hook.result.current.exec({});
    });

    expect(hook.result.current.loading).toBe(true);
    expect(hook.result.current.isFirstLoading).toBe(false);
    expect(hook.result.current.data).toEqual({ a: 1 });

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    expect(hook.result.current.loading).toBe(false);
    expect(hook.result.current.isFirstLoading).toBe(false);
    expect(hook.result.current.data).toEqual({ a: 1 });
  });
});
