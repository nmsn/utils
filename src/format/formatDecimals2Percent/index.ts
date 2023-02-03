import toValidDecimal from '../toValidDecimal';

type Options = {
  digit?: number;
  isThresholdInt?: boolean;
};

const formatDecimals2Percent = (value: number, options?: Options) => {
  const { digit = 2, isThresholdInt = true } = options ?? {};

  if (!(value >= 0 && value <= 1)) {
    throw new Error('Input invalid param');
  }

  if ((value === 0 || value === 1) && isThresholdInt) {
    return value.toString();
  }

  if (value >= 0 && value <= 1) {
    return `${toValidDecimal(value * 100, digit)}%`;
  }

  return value;
};

export default formatDecimals2Percent;
