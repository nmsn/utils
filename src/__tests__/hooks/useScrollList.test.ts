import { act, renderHook } from '@testing-library/react';

import useScrollList from '../../hooks/useScrollList';

import { request } from './useLoading.test';

describe('useLoading', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const setUp = ({ service, onCallback, onErrCallback, onSuccessCallback }: any) =>
    renderHook(() => useScrollList({ service, onCallback, onErrCallback, onSuccessCallback }));

  it('test useLoading', async () => {
    const hook = setUp({
      service: request,
      onCallback: (data: any) => console.log(data),
      onErrCallback: (data: any) => console.log(data),
      onSuccessCallback: (data: any) => console.log(data),
    });

    expect(hook.result.current.loading).toBe(false);
    expect(hook.result.current.isFirstLoading).toBe(false);
    expect(hook.result.current.list).toEqual([]);
    expect(hook.result.current.hasNextPage).toBe(false);

    act(() => {
      hook.result.current.exec({
        flag: true,
        data: {
          list: Array(10).fill(0),
          hasNextPage: true,
          pageNum: 1,
        },
      });
    });

    expect(hook.result.current.loading).toBe(true);
    expect(hook.result.current.isFirstLoading).toBe(true);
    expect(hook.result.current.list).toEqual([]);
    expect(hook.result.current.hasNextPage).toBe(false);

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    expect(hook.result.current.loading).toBe(false);
    expect(hook.result.current.isFirstLoading).toBe(false);
    expect(hook.result.current.list).toEqual(Array(10).fill(0));
    expect(hook.result.current.hasNextPage).toBe(true);

    act(() => {
      hook.result.current.exec({
        flag: true,
        data: {
          list: Array(10).fill(0),
          hasNextPage: false,
          pageNum: 2,
        },
      });
    });

    expect(hook.result.current.loading).toBe(true);
    expect(hook.result.current.isFirstLoading).toBe(false);
    expect(hook.result.current.list).toEqual(Array(10).fill(0));
    expect(hook.result.current.hasNextPage).toBe(true);

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    expect(hook.result.current.loading).toBe(false);
    expect(hook.result.current.isFirstLoading).toBe(false);
    expect(hook.result.current.list).toEqual(Array(20).fill(0));
    expect(hook.result.current.hasNextPage).toBe(false);
  });
});
