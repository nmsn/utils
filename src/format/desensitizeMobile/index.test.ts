import phoneDesensitization from '.';

it('phoneDesensitization', () => {
  expect(phoneDesensitization('13111111111')).toEqual('131****1111');
  expect(() => phoneDesensitization('')).toThrow();
});
