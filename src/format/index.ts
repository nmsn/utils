import { isValidMoney, isValidArray, isValidObj } from '@/validator';

const EMPTY_TEXT_MARK = '--';

export const formatSectionStr = (data: string | string[], sign: string) => {
  const filterArr = [...new Set([...(isValidArray(data) ? data : data.split(sign))])].filter(
    Boolean,
  );

  return filterArr.join(sign);
};

export const arr2Obj = (data: [string, any][]) => {
  if (!isValidArray(data)) {
    return {};
  }

  return Object.assign(
    {},
    ...Array.from(
      data?.map(item => ({
        [item[0]]: item[1],
      })),
    ),
  );
};

export const displayWithUnit = (
  num: number | string,
  unit: string,
  emptyMark = EMPTY_TEXT_MARK,
) => {
  if (typeof num === 'number' && (num || num === 0)) {
    return `${num}${unit}`;
  }

  if (typeof num === 'string' && num) {
    // 返回的数据里面已经有了单位
    if (num.endsWith(unit)) {
      return num;
    }

    return `${num}${unit}`;
  }

  return emptyMark;
};

export const getSuffix = (text: string) => {
  const regex = /(\.)(\w+)$/;
  const result = (text || '').match(regex);
  return result && result.length ? result[2] : '';
};

export const addThousandSeparator = (num: number | string) => {
  // 不符合规范的数字
  if (!isValidMoney(num)) {
    return '0';
  }

  if (typeof num === 'number') {
    num = num.toString();
  }

  const regex = /\B(?=(\d{3})+(?!\d))/g;

  if (num.includes('.')) {
    const arr = num.split('.');
    arr[0] = arr[0].replace(regex, ',');
    return arr.join('.');
  }
  return num.replace(regex, ',');
};

export const formatDecimals2Percent = (value: number, digit = 2) => {
  if (value >= 0 && value <= 1) {
    return `${parseFloat((value * 100).toFixed(digit))}%`;
  }

  return value;
};

export const deleteAttrs = (obj: { [key: string]: any }, attrs: string[]) => {
  if (!isValidObj(obj)) {
    throw new Error('param is not a valid object');
  }

  const entries = Object.entries(obj).filter(([key]) => !attrs.includes(key));
  return Object.fromEntries(entries);
};

export const filterObjAttrs = (
  obj: { [key: string]: any },
  {
    filterAttrs = [],
    deleteAttrs = [],
    formatAttrs = [],
  }: {
    filterAttrs?: string[];
    deleteAttrs?: string[];
    formatAttrs?: [string, (data: any) => any][];
  },
) => {
  if (!isValidObj(obj)) {
    throw new Error('Param is not a valid object.');
  }

  let filterResult: [string, any][] = [];

  if (isValidArray(filterAttrs) && isValidArray(deleteAttrs)) {
    filterResult = Object.entries(obj).filter(
      ([key]) => filterAttrs.includes(key) && !deleteAttrs.includes(key),
    );
  } else if (isValidArray(filterAttrs)) {
    filterResult = Object.entries(obj).filter(([key]) => filterAttrs.includes(key));
  } else if (isValidArray(deleteAttrs)) {
    filterResult = Object.entries(obj).filter(([key]) => !deleteAttrs.includes(key));
  } else {
    filterResult = Object.entries(obj);
  }

  const formatResult = filterResult.map(([key, value]) => {
    const formatKeys = formatAttrs.map(item => item[0]);
    if (formatKeys.includes(key)) {
      const format = formatAttrs.find(item => item[0] === key)?.[1];
      return [key, format?.(value)];
    }

    return [key, value];
  });

  return Object.fromEntries(formatResult);
};

export const toFraction = (numerator: number, denominator: number) => {
  if (numerator === 0 || denominator === 1) {
    return;
  }

  const getDivisor = (a: number, b: number): number => {
    return b == 0 ? a : getDivisor(b, a % b);
  };

  const divisor = getDivisor(numerator, denominator);

  return `${numerator / divisor}/${denominator / divisor}`;
};
