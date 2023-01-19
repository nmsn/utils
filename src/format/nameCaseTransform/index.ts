const nameCaseTransform = (text: string, type: 'lowerCamel' | 'upperCamel' | 'snake' | 'kebab') => {
  const textBlock = (() => {
    if (text.includes('-')) {
      return text.split('-');
    }

    if (text.includes('_')) {
      return text.split('_');
    }

    return text.split(/(?=[A-Z])/);
  })().map(item => item.toLowerCase());

  const firstLetterUpperCase = (text: string) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

  const transform = {
    lowerCamel: (textBlock: string[]) => {
      return textBlock
        .map((item, index) => {
          if (index === 0) {
            return item;
          }

          return firstLetterUpperCase(item);
        })
        .join('');
    },
    upperCamel: (textBlock: string[]) =>
      textBlock
        .map(item => {
          return firstLetterUpperCase(item);
        })
        .join(''),
    snake: (textBlock: string[]) => textBlock.join('_'),
    kebab: (textBlock: string[]) => textBlock.join('-'),
  };

  return transform[type](textBlock);
};

export default nameCaseTransform;
