const isValidString = (param: unknown): param is string => {
  return typeof param === 'string' && param !== '';
};

export default isValidString;
