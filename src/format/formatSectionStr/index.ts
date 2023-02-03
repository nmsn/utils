import { isValidArray, isValidString } from '@/validator';

const formatSectionStr = (data: string | (string | number)[], sign: string) => {
  if (!isValidArray(data) && !isValidString(data)) {
    throw new Error('Input invalid param');
  }

  const filterArr = [...new Set([...(isValidArray(data) ? data : data.split(sign))])].filter(
    Boolean,
  );

  return filterArr.join(sign);
};

export default formatSectionStr;
