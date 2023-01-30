import { toValidDecimal } from '@/format';

type Options = {
  digit?: number;
  isThresholdPercent?: boolean;
};

const formatDecimals2Percent = (value: number, options?: Options) => {
  const { digit = 2, isThresholdPercent = true } = options ?? {};

  if (!(value >= 0 && value <= 1)) {
    throw new Error('Input invalid param');
  }

  if ((value === 0 || value === 1) && isThresholdPercent) {
    return value.toString();
  }

  if (value >= 0 && value <= 1) {
    return `${toValidDecimal(value * 100, digit)}%`;
  }

  return value;
};

export default formatDecimals2Percent;
