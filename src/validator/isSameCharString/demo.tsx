import { isSameCharString } from '@nmsn/utils';
import React from 'react';

export default () => {
  const source = '***';
  const result = isSameCharString(source, '*');

  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
    </div>
  );
};
