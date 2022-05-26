/** 判断参数是否为有效可转化为数字类型
 * @param {number} value 入参
 */
export const isValidNumber = (
  value: number | string | undefined | null,
): value is number | string => {
  if (value === undefined || value === null) {
    return false;
  }

  if (typeof value === 'string' && value.length) {
    return typeof +value === 'number' && !isNaN(+value);
  }

  return typeof value === 'number' && !isNaN(value);
};

export const isValidEnum = (value: number | string) => {
  if (typeof value === 'string' && value.length) {
    return typeof +value === 'number' && !isNaN(+value) && +value !== -1;
  }

  return typeof value === 'number' && !isNaN(value) && value !== -1;
};

export const isInputValidNumber = (
  value: Parameters<typeof isValidNumber>[0],
): value is number | string => {
  if (value === 0 || value === '0') {
    return false;
  }
  return isValidNumber(value);
};
