import { isValidEnumValue } from '@nmsn/utils';
import React from 'react';

export default () => {
  const source = [1];
  const result = isValidEnumValue(1);

  const source2 = ['a', ['a', 'b']];
  const result2 = isValidEnumValue(source2[0], source2[1]);

  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
      <p>source2: {JSON.stringify(source2)}</p>
      <p>result2: {JSON.stringify(result2)}</p>
    </div>
  );
};
