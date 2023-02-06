const isValidNumber = (param: unknown): param is number => {
  return typeof param === 'number' && !isNaN(param);
};

export default isValidNumber;
