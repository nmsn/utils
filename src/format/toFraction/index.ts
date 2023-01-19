const toFraction = (numerator: number, denominator: number) => {
  if (numerator === 0 || denominator === 1) {
    return;
  }

  const getDivisor = (a: number, b: number): number => {
    return b == 0 ? a : getDivisor(b, a % b);
  };

  const divisor = getDivisor(numerator, denominator);

  return `${numerator / divisor}/${denominator / divisor}`;
};

export default toFraction;
