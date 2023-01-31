const getSuffix = (text: string) => {
  // 匹配最后的 '.'
  const regex = /(\.)(\w+)$/;
  const result = (text || '').match(regex);
  return result && result.length ? result[2] : '';
};

export default getSuffix;
