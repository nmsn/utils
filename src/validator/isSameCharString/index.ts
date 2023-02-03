import isValidString from '../isValidString';

const isSameCharacterStr = (str: string, char?: string) => {
  if (!isValidString(str)) {
    throw new Error('Input invalid param');
  }

  const set = new Set(str);

  if (!char) {
    return set.size === 1;
  }

  return set.size === 1 && char.length === 1 && set.has(char);
};

export default isSameCharacterStr;
