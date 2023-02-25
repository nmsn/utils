import { act, renderHook } from '@testing-library/react';

import useLoading from '../../hooks/useLoading';

type ResType = {
  data: any;
  flag: boolean;
  errCode?: string | number;
  errMessage?: string;
};

export function request(params: { flag: boolean; data: any }): Promise<ResType> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const { flag = true, data = {} } = params;
      if (flag) {
        resolve({ flag: true, data });
      } else {
        reject({ flag: false, data, errCode: 1, errMsg: 'Request error.' });
      }
    }, 1000),
  );
}

describe('useLoading', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const setUp = ({ asyncFunc, onCallback, onErrCallback, onSuccessCallback }: any) =>
    renderHook(() => useLoading({ asyncFunc, onCallback, onErrCallback, onSuccessCallback }));

  it('test useLoading', async () => {
    const hook = setUp({
      asyncFunc: request,
      onCallback: (data: any) => console.log(data),
      onErrCallback: (data: any) => console.log(data),
      onSuccessCallback: (data: any) => console.log(data),
    });

    expect(hook.result.current.loading).toBe(false);
    expect(hook.result.current.isFirstLoading).toBe(false);

    act(() => {
      hook.result.current.exec({});
    });

    expect(hook.result.current.loading).toBe(true);
    expect(hook.result.current.isFirstLoading).toBe(true);

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    expect(hook.result.current.loading).toBe(false);

    act(() => {
      hook.result.current.exec({});
    });

    expect(hook.result.current.loading).toBe(true);
    expect(hook.result.current.isFirstLoading).toBe(false);

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    expect(hook.result.current.loading).toBe(false);
    expect(hook.result.current.isFirstLoading).toBe(false);
  });
});
