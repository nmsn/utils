import React from 'react';
import { getSuffix } from '@nmsn/utils';

export default () => {
  const source = 'test.txt';
  const result = getSuffix(source);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
    </div>
  );
};
