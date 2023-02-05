import { isObj } from '@nmsn/utils';
import React from 'react';

export default () => {
  const source = {};
  const result = isObj(source);
  const source2 = null;
  const result2 = isObj(null);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
      <p>source2: {JSON.stringify(source2)}</p>
      <p>result2: {JSON.stringify(result2)}</p>
    </div>
  );
};
