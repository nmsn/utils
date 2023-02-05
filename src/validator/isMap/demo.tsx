import { isMap } from '@nmsn/utils';
import React from 'react';

export default () => {
  const source = new Map([
    [1, 1],
    [2, 2],
  ]);
  const result = isMap(source);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
    </div>
  );
};
