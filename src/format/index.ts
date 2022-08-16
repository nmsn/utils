import { isValidMoney, isValidArray } from '@/validator';

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

export default {
  addThousandSeparator,
  formatSectionStr,
  arr2Obj,
  getSuffix,
  displayWithUnit,
};
