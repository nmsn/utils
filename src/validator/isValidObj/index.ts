import isObj from '../isObj';

const isValidObj = (val: unknown) => {
  return isObj(val) && Object.keys(val)?.length > 0;
};

export default isValidObj;
