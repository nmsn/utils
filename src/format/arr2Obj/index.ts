import { isValidArray } from '@/validator';

const arr2Obj = (data: [string, any][]) => {
  if (!isValidArray(data)) {
    return {};
  }

  return Object.assign(
    {},
    ...Array.from(
      data?.map(item => ({
        [item[0]]: item[1],
      })),
    ),
  );
};

export default arr2Obj;
