import { isValidMoney, isValidArray } from '@/validator';

const EMPTY_TEXT_MARK = '--';

export const formatSectionStr = (data: string | string[], sign: string) => {
  const filterArr = [...new Set([...(isValidArray(data) ? data : data.split(sign))])].filter(
    Boolean,
  );

  return filterArr.join(sign);
};

const arr2Obj = (data: [string, any][]) => {
  return Object.assign(
    {},
    ...Array.from(
      data?.map(item => ({
        [item[0]]: item[1],
      })),
    ),
  );
};

export const displayWithUnit = (num: number | string, unit: string) => {
  if (typeof num === 'number' && (num || num === 0)) {
    return `${num}${unit}`;
  }

  if (typeof num === 'string' && num) {
    // 返回的数据里面已经有了单位
    if (num.endsWith(unit)) {
      return num;
    }

    return `${num}${unit}`;
  }

  return EMPTY_TEXT_MARK;
};

const defaultFilterKeys = ['Str', 'Show', 'Desc'];

const hasFilterKeys = (key: string) => {
  return defaultFilterKeys.some(item => key.includes(item));
};

const getParamKeys = (
  paramKeys: string[],
): [string[], { globalParamKeys: string[]; nextParamsKeysMap: Map<any, any> }] => {
  const globalParamKeys: string[] = [];
  const curParamKeys: string[] = [];
  const nextParamsKeysMap = new Map();

  paramKeys.forEach(item => {
    if (item.includes('.')) {
      const keys = item.split('.').filter(Boolean);

      if (keys.length === 1) {
        curParamKeys.push(keys[0]);
      } else {
        const [curKey, ...nextKeysArr] = keys;
        const nextKeysStr = `.${nextKeysArr.join('.')}`;
        if (nextParamsKeysMap.has(curKey)) {
          nextParamsKeysMap.set(curKey, [...nextParamsKeysMap.get(curKey), nextKeysStr]);
        } else {
          nextParamsKeysMap.set(curKey, [nextKeysStr]);
        }
      }
    } else {
      // 全局过滤属性
      globalParamKeys.push(item);
    }
  });

  return [
    [...curParamKeys, ...globalParamKeys],
    {
      globalParamKeys,
      nextParamsKeysMap,
    },
  ];
};

const getNewParamKeys = (
  key: string,
  nextParam: {
    globalParamKeys: string[];
    nextParamsKeysMap: Map<any, any>;
  },
) => {
  const { globalParamKeys, nextParamsKeysMap } = nextParam;

  const extraParamKeys: string[] = nextParamsKeysMap.get(key) || [];
  const newParamKeys = [...globalParamKeys, ...extraParamKeys];

  return newParamKeys;
};

const getNewConfig = (
  config: { [key: string]: any },
  editedConfig: {
    passKeys?: string[];
    numKeys?: string[];
    strKeys?: string[];
    arrKeys?: string[];
  },
) => {
  return {
    ...config,
    ...editedConfig,
  };
};

export const initFormatData = (
  data: { [key: string]: any },
  config?: {
    numKeys?: string[];
    passKeys?: string[];
  },
) => {
  const result: Record<string, any> = {};
  const { numKeys = [], passKeys = [] } = config || {};

  const [curPassKeys, nextPassParam] = getParamKeys(passKeys);
  const [curNumKeys, nextNumParam] = getParamKeys(numKeys);

  Object.entries(data).forEach(([key, value]) => {
    if (curPassKeys.includes(key) || hasFilterKeys(key)) {
      // 过滤属性不要
    } else if (value === null || value === -1 || value === '') {
      result[key] = undefined;
    } else if (curNumKeys.includes(key)) {
      if (Array.isArray(value)) {
        result[key] = value?.map(item => item?.toString());
      } else {
        result[key] = value?.toString();
      }
    } else if (
      Array.isArray(value) &&
      value?.every(item => Object.prototype.toString.call(item) === '[object Object]')
    ) {
      const newPassKeys = getNewParamKeys(key, nextPassParam);
      const newNumKeys = getNewParamKeys(key, nextNumParam);
      const newConfig = getNewConfig(config || {}, { passKeys: newPassKeys, numKeys: newNumKeys });
      result[key] = value.map(item => initFormatData(item, newConfig));
    } else if (Object.prototype.toString.call(value) === '[object Object]') {
      const newPassKeys = getNewParamKeys(key, nextPassParam);
      const newNumKeys = getNewParamKeys(key, nextNumParam);
      const newConfig = getNewConfig(config || {}, { passKeys: newPassKeys, numKeys: newNumKeys });
      result[key] = initFormatData(value, newConfig);
    } else {
      result[key] = value;
    }
  });

  return result;
};

export const submitFormatData = (
  data: { [key: string]: any },
  config?: {
    passKeys?: string[];
    numKeys?: string[];
    strKeys?: string[];
    arrKeys?: string[];
  },
) => {
  const result: Record<string, any> = {};
  const { passKeys = [], numKeys = [], strKeys = [], arrKeys = [] } = config || {};

  const [curPassKeys, nextPassParam] = getParamKeys(passKeys);
  const [curNumKeys, nextNumParam] = getParamKeys(numKeys);
  const [curStrKeys, nextStrParam] = getParamKeys(strKeys);
  const [curArrKeys, nextArrParam] = getParamKeys(arrKeys);

  Object.entries(data).forEach(([key, value]) => {
    if (
      curPassKeys.includes(key) ||
      key.includes('Str') ||
      key.includes('Desc') ||
      key.includes('Show')
    ) {
      // 过滤属性不要
    } else if (curNumKeys.includes(key)) {
      if (Array.isArray(value)) {
        result[key] = value?.map(item => (Number(item) || Number(item) === 0 ? Number(item) : -1));
      } else {
        result[key] = Number(value) || Number(value) === 0 ? Number(value) : -1;
      }
    } else if (curStrKeys.includes(key)) {
      if (Array.isArray(value)) {
        result[key] = value?.map(item => item?.toString() || '');
      } else {
        result[key] = value?.toString() || '';
      }
    } else if (curArrKeys.includes(key)) {
      result[key] = Array.isArray(value) ? value : [];
    } else if (value === undefined) {
      result[key] = -1;
    } else if (
      Array.isArray(value) &&
      value?.every(item => Object.prototype.toString.call(item) === '[object Object]')
    ) {
      const newPassKeys = getNewParamKeys(key, nextPassParam);
      const newNumKeys = getNewParamKeys(key, nextNumParam);
      const newStrKeys = getNewParamKeys(key, nextStrParam);
      const newArrKeys = getNewParamKeys(key, nextArrParam);

      const newConfig = getNewConfig(config || {}, {
        passKeys: newPassKeys,
        numKeys: newNumKeys,
        strKeys: newStrKeys,
        arrKeys: newArrKeys,
      });

      result[key] = value.map(item => submitFormatData(item, newConfig));
    } else if (Object.prototype.toString.call(value) === '[object Object]') {
      const newPassKeys = getNewParamKeys(key, nextPassParam);
      const newNumKeys = getNewParamKeys(key, nextNumParam);
      const newStrKeys = getNewParamKeys(key, nextStrParam);
      const newArrKeys = getNewParamKeys(key, nextArrParam);

      const newConfig = getNewConfig(config || {}, {
        passKeys: newPassKeys,
        numKeys: newNumKeys,
        strKeys: newStrKeys,
        arrKeys: newArrKeys,
      });

      result[key] = submitFormatData(value, newConfig);
    } else {
      result[key] = value;
    }
  });

  return result;
};

export const getSuffix = (text: string) => {
  const regex = /(\.)(\w+)$/;
  const result = (text || '').match(regex);
  return result && result.length ? result[2] : '';
};

export const addThousandSeparator = (num: number | string) => {
  // 不符合规范的数字
  if (!isValidMoney(num)) {
    return null;
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

export default {
  addThousandSeparator,
  formatSectionStr,
  arr2Obj,
};
