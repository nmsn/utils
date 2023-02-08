const isAsyncFunction = (func: unknown) => {
  return Object.prototype.toString.call(func).includes('AsyncFunction');
};

export default isAsyncFunction;
