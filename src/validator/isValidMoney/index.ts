import regex from '@/regex';

const isValidMoney = (value: number | string) => {
  if (typeof value === 'number' && [Infinity, -Infinity].includes(value)) {
    return false;
  }
  const val = typeof value === 'string' ? value : value.toString();
  return regex.money.test(val);
};

export default isValidMoney;
