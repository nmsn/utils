import { renderHook, act } from '@testing-library/react';
import useLoading from '../../hooks/useLoading';

export function request(data: { req: number } = { req: 1 }) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (data.req === 0) {
        reject({ flag: false });
      } else {
        resolve({ flag: true });
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

  const setUp = ({ service, onCallback, onErrCallback, onSuccessCallback }: any) =>
    renderHook(() => useLoading({ service, onCallback, onErrCallback, onSuccessCallback }));

  // let hook: any;

  it('test useLoading', async () => {
    const hook = setUp({
      service: request,
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
