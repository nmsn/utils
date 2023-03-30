import React from 'react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';

import { act, render } from '@testing-library/react';

import useUrlParams from '.';

export const setup = (initialEntries: MemoryRouterProps['initialEntries']) => {
  const res = {} as any;

  const Component = () => {
    const [state, setState] = useUrlParams();
    Object.assign(res, { state, setState });
    return null;
  };

  render(
    <MemoryRouter initialEntries={initialEntries}>
      <Component />
    </MemoryRouter>,
  );

  return res;
};

it('useUrlParams should be defined', () => {
  expect(useUrlParams).toBeDefined();
});

describe('useUrlParams', () => {
  it('state should be url search params', () => {
    const res = setup([
      {
        pathname: '/index',
        search: '?count=1',
      },
    ]);
    expect(res.state).toMatchObject({ count: '1' });
  });

  it('url shoule be changed when use setState', () => {
    const res = setup(['/index']);
    expect(res.state).toMatchObject({});
    act(() => {
      res.setState({ count: 1 });
    });
    expect(res.state).toMatchObject({ count: '1' });
  });

  it('multiple states should be work', () => {
    const res = setup(['/index']);
    act(() => {
      res.setState({ page: 1 });
    });
    act(() => {
      res.setState({ pageSize: 10 });
    });
    expect(res.state).toMatchObject({ page: '1', pageSize: '10' });
  });
});
