import React from 'react';
import { addThousandSeparator } from '@nmsn/utils';

export default () => {
  const source = 10000;
  const result = addThousandSeparator(source);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
    </div>
  );
};
