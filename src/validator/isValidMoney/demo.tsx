import { isValidMoney } from '@nmsn/utils';
import React from 'react';

export default () => {
  const source = '10,000';
  const result = isValidMoney(source);

  const source2 = 10000;
  const result2 = isValidMoney(source2);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>

      <p>source2: {JSON.stringify(source2)}</p>
      <p>result2: {JSON.stringify(result2)}</p>
    </div>
  );
};
