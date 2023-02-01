import React from 'react';
import { toFraction } from '@nmsn/utils';

export default () => {
  const source = [5, 10];
  const result = toFraction(source[0], source[1]);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
    </div>
  );
};
