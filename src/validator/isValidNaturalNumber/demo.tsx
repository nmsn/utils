import React from 'react';

import { isValidNaturalNumber } from '@nmsn/utils';

export default () => {
  const source = 1;
  const result = isValidNaturalNumber(source);

  const source2 = -1;
  const result2 = isValidNaturalNumber(source2);

  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>

      <p>source2: {JSON.stringify(source2)}</p>
      <p>result2: {JSON.stringify(result2)}</p>
    </div>
  );
};
