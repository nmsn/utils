const isValidString = (val: unknown): val is string => {
  return typeof val === 'string' && val !== '';
};

export default isValidString;
