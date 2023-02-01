import React from 'react';
import { toValidDecimal } from '@nmsn/utils';

export default () => {
  const source = [123.567, 2];
  const result = toValidDecimal(source[0], source[1]);

  const source2 = [123.567, 5];
  const result2 = toValidDecimal(source[0], source[1]);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>

      <p>source2: {JSON.stringify(source2)}</p>
      <p>result2: {JSON.stringify(result2)}</p>
    </div>
  );
};
