import { isValidArray, isValidObj } from '@/validator';

type Options = {
  filterAttrs?: string[];
  deleteAttrs?: string[];
  formatAttrs?: [string, (data: any) => any][];
};

const filterObjAttrs = (
  obj: { [key: string]: any },
  { filterAttrs = [], deleteAttrs = [], formatAttrs = [] }: Options,
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

export default filterObjAttrs;
