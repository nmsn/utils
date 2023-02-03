const isObj = (val: unknown): val is { [key: string]: any } => {
  return Object.prototype.toString.call(val) === '[object Object]';
};

export default isObj;
