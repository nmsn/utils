import { isValidObj } from '@/validator';

const deleteAttrs = (obj: { [key: string]: any }, attrs: string[]) => {
  if (!isValidObj(obj)) {
    throw new Error('param is not a valid object');
  }

  const entries = Object.entries(obj).filter(([key]) => !attrs.includes(key));
  return Object.fromEntries(entries);
};

export default deleteAttrs;
