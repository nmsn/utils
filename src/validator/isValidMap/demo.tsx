import React from 'react';

import { isValidMap } from '@nmsn/utils';

export default () => {
  const source = new Map([]);
  const result = isValidMap(source);
  const source2 = new Map([
    [1, 1],
    [2, 2],
  ]);
  const result2 = isValidMap(source2);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
      <p>source2: {JSON.stringify(source2)}</p>
      <p>result2: {JSON.stringify(result2)}</p>
    </div>
  );
};
