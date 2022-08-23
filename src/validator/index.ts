import { money } from '@/regex';

const isNumOrStr = (value: number | string): value is string | number => {
  return typeof value === 'number' || typeof value === 'string';
};

/** 校验是否为有效数据
 * @param {number|string} value
 * @returns {boolean} Judge value is valid param.
 */
export const isValidParam = (value: number | string): boolean => {
  if (!isNumOrStr(value)) {
    return false;
  }

  if (typeof value === 'number' && isNaN(value)) {
    return false;
  }

  if (typeof value === 'string' && value.trim() === '') {
    return false;
  }

  return true;
};

export const isValidEnum = (value: number | string) => {
  if (typeof value === 'string') {
    return isValidParam(value);
  }

  return typeof value === 'number' && value >= 0;
};

export const isValidMoney = (value: number | string) => {
  if (typeof value === 'number' && [Infinity, -Infinity].includes(value)) {
    return false;
  }
  const val = typeof value === 'string' ? value : value.toString();
  return money.test(val);
};

export const isValidArray = (value: unknown | unknown[]): value is any[] => {
  return Array.isArray(value) && !!value?.length;
};
