import { naturalNumber } from '@/regex';

const isValidNaturalNumber = (num: number): num is number => {
  const numStr = num.toString();
  if (naturalNumber.test(numStr)) {
    return true;
  }
  return false;
};

export default isValidNaturalNumber;
