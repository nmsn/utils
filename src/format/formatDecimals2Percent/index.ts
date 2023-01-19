const formatDecimals2Percent = (value: number, digit = 2) => {
  if (value >= 0 && value <= 1) {
    return `${parseFloat((value * 100).toFixed(digit))}%`;
  }

  return value;
};

export default formatDecimals2Percent;
