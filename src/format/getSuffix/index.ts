const getSuffix = (text: string) => {
  const regex = /(\.)(\w+)$/;
  const result = (text || '').match(regex);
  return result && result.length ? result[2] : '';
};

export default getSuffix;
