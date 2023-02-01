import { isValidNaturalNumber } from '@/validator';

const toFraction = (numerator: number, denominator: number, toStr?: boolean) => {
  if (
    numerator === 0 ||
    denominator === 1 ||
    !isValidNaturalNumber(numerator) ||
    !isValidNaturalNumber(denominator)
  ) {
    throw new Error('Input invalid param');
  }

  // 获取最大公约数
  const getDivisor = (a: number, b: number): number => {
    return b == 0 ? a : getDivisor(b, a % b);
  };

  const divisor = getDivisor(numerator, denominator);

  if (toStr) {
    return `${numerator / divisor}/${denominator / divisor}`;
  }
  return [numerator / divisor, denominator / divisor];
};

export default toFraction;
