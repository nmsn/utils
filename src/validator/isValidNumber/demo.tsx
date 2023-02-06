import { isValidNumber } from '@nmsn/utils';
import React from 'react';

export default () => {
  const source = 1;
  const result = isValidNumber(source);

  const source2 = NaN;
  const result2 = isValidNumber(source2);

  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>

      <p>source2: {JSON.stringify(source2)}</p>
      <p>result2: {JSON.stringify(result2)}</p>
    </div>
  );
};
