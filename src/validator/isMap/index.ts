const isMap = (val: unknown): val is Map<unknown, unknown> => {
  return Object.prototype.toString.call(val) === '[object Map]';
};

export default isMap;
