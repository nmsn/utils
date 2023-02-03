import isMap from '../isMap';

const isValidMap = (val: unknown): val is Map<unknown, unknown> => {
  return isMap(val) && (val as Map<unknown, unknown>)?.size > 0;
};

export default isValidMap;
