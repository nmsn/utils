import arr2Obj from './index';

it('arr2Obj', () => {
  expect(
    arr2Obj([
      ['1', 1],
      ['2', 2],
    ]),
  ).toEqual({ 1: 1, 2: 2 });

  expect(arr2Obj([])).toEqual({});
});
