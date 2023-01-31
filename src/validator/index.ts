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

export const isObj = (val: unknown): val is { [key: string]: any } => {
  return Object.prototype.toString.call(val) === '[object Object]';
};

export const isValidObj = (val: unknown) => {
  return isObj(val) && Object.keys(val)?.length > 0;
};

export const isValidNumber = (val: unknown): val is number => {
  return typeof val === 'number' && !isNaN(val);
};

export const isValidNaturalNumber = (num: number): num is number => {
  const reg = /^(0|[1-9]\d*)$/;
  const numStr = num.toString();
  if (reg.test(numStr)) {
    return true;
  }
  return false;
};

export const isMap = (val: unknown): val is Map<unknown, unknown> => {
  return Object.prototype.toString.call(val) === '[object Map]';
};

export const isValidMap = (val: unknown): val is Map<unknown, unknown> => {
  return isMap(val) && (val as Map<unknown, unknown>)?.size > 0;
};

export const isValidStr = (val: unknown): val is string => {
  return typeof val === 'string' && !!val;
};

export const isSameCharacterStr = (str: string, char?: string) => {
  if (!isValidStr(str)) {
    throw new Error('Input invalid param');
  }

  const set = new Set(str);

  if (!char) {
    return set.size === 1;
  }

  return set.size === 1 && char.length === 1 && set.has(char);
};
