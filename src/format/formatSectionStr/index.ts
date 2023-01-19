import { isValidArray } from '@/validator';

const formatSectionStr = (data: string | string[], sign: string) => {
  const filterArr = [...new Set([...(isValidArray(data) ? data : data.split(sign))])].filter(
    Boolean,
  );

  return filterArr.join(sign);
};

export default formatSectionStr;
