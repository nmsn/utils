const EMPTY_TEXT_MARK = '--';

const displayWithUnit = (num: number | string, unit: string, emptyMark = EMPTY_TEXT_MARK) => {
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

export default displayWithUnit;
