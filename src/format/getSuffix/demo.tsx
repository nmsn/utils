import { getSuffix } from '@nmsn/utils';
import React from 'react';

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
