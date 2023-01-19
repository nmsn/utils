import { isValidMoney } from '@/validator';

const addThousandSeparator = (num: number | string) => {
  // 不符合规范的数字
  if (!isValidMoney(num)) {
    return '0';
  }

  if (typeof num === 'number') {
    num = num.toString();
  }

  const regex = /\B(?=(\d{3})+(?!\d))/g;

  if (num.includes('.')) {
    const arr = num.split('.');
    arr[0] = arr[0].replace(regex, ',');
    return arr.join('.');
  }
  return num.replace(regex, ',');
};

export default addThousandSeparator;
