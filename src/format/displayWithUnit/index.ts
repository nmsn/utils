const EMPTY_TEXT_MARK = '--';

import { isValidStr, isValidNumber } from '@/validator';

type Option = {
  emptyMark?: string;
  isZeroValid?: boolean;
  isDisplayUnitInValid?: boolean;
};

const defaultOption = {
  emptyMark: EMPTY_TEXT_MARK,
  isZeroValid: true,
  isDisplayUnitInValid: false,
};

const displayWithUnit = (
  num: number | string | undefined | null,
  unit: string,
  option?: Option,
) => {
  const {
    emptyMark = EMPTY_TEXT_MARK,
    isZeroValid,
    isDisplayUnitInValid,
  } = { ...defaultOption, ...option };

  let validNum = undefined;

  if (typeof num === 'string') {
    if (!isValidStr(num)) {
      validNum = undefined;
    }

    const temp = num.endsWith(unit) ? +num.split(unit)[0] : +num;

    if (isValidNumber(temp)) {
      validNum = temp;
    } else {
      validNum = undefined;
    }
  }

  if (typeof num === 'number' && isValidNumber(num)) {
    if (isValidNumber(num)) {
      validNum = num;
    } else {
      validNum = undefined;
    }
  }

  // validNum is valid number or undefined null

  if (validNum === 0 && isZeroValid) {
    if (isZeroValid) {
      return `${validNum}${unit}`;
    }

    return isDisplayUnitInValid ? `${emptyMark}${unit}` : emptyMark;
  }

  if (validNum) {
    return `${validNum}${unit}`;
  }

  return isDisplayUnitInValid ? `${emptyMark}${unit}` : emptyMark;
};

export default displayWithUnit;
