import { isValidNumber } from '@/validator';

// TODO num 类型判断如遇到 undefined，null， ‘0’ 不应报错
const toValidDecimal = (num: number, digit = 2) => {
  if (!isValidNumber(num)) {
    throw new Error('Num is not a valid param');
  }

  if (digit <= 0) {
    throw new Error('Digit is not a valid param');
  }
  const i = Math.pow(10, digit);
  return Math.round(num * i) / i;
};

export default toValidDecimal;
