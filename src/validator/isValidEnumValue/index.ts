import isValidArray from '../isValidArray';
import isValidNaturalNumber from '../isValidNaturalNumber';

const isValidEnumValue = (value: number | string, options?: (string | number)[]) => {
  if (isValidArray(options)) {
    return options.includes(value);
  }
  // 默认情况下枚举值判断为 >= 0 的数字
  return typeof value == 'number' && isValidNaturalNumber(value);
};

export default isValidEnumValue;
