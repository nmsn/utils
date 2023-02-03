import nameCaseTransform from './';

it('nameCaseTransform', () => {
  expect(nameCaseTransform('aAa', 'lowerCamel')).toEqual('aAa');
  expect(nameCaseTransform('aAa', 'upperCamel')).toEqual('AAa');
  expect(nameCaseTransform('aAa', 'snake')).toEqual('a_aa');
  expect(nameCaseTransform('aAa', 'kebab')).toEqual('a-aa');

  expect(nameCaseTransform('a_aa', 'lowerCamel')).toEqual('aAa');
  expect(nameCaseTransform('a_aa', 'upperCamel')).toEqual('AAa');
  expect(nameCaseTransform('a_aa', 'snake')).toEqual('a_aa');
  expect(nameCaseTransform('a_aa', 'kebab')).toEqual('a-aa');

  expect(nameCaseTransform('a-aa', 'lowerCamel')).toEqual('aAa');
  expect(nameCaseTransform('a-aa', 'upperCamel')).toEqual('AAa');
  expect(nameCaseTransform('a-aa', 'snake')).toEqual('a_aa');
  expect(nameCaseTransform('a-aa', 'kebab')).toEqual('a-aa');
});
