const removeMultipleStrLeadingSpace = (strTemplate: string, keepBlankRow = true) => {
  if (!strTemplate) {
    return '';
  }
  if (keepBlankRow) {
    return strTemplate.replace(/^[^\S\n]+/gm, '');
  }
  return strTemplate.replace(/^\s+/gm, '');
};

export default removeMultipleStrLeadingSpace;
