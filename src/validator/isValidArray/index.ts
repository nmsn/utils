const isValidArray = (value: unknown | unknown[]): value is any[] => {
  return Array.isArray(value) && !!value?.length;
};

export default isValidArray;
