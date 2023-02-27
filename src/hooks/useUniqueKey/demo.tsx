import React from 'react';
import { message } from 'antd';

import { useUniqueKey } from '@nmsn/utils';

export default () => {
  const [getUniqueKey] = useUniqueKey('suffix');

  const onClick = (param: string) => {
    const text = getUniqueKey(param);
    message.info(text);
  };

  return (
    <>
      <button type="button" onClick={() => onClick('key1')}>
        key1
      </button>
      <button type="button" onClick={() => onClick('key2')} style={{ marginLeft: 8 }}>
        key2
      </button>
    </>
  );
};
