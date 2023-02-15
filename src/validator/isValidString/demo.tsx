import React from 'react';

import { isValidString } from '@nmsn/utils';

export default () => {
  const source = '1';
  const result = isValidString(source);

  const source2 = '';
  const result2 = isValidString(source2);

  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>

      <p>source2: {JSON.stringify(source2)}</p>
      <p>result2: {JSON.stringify(result2)}</p>
    </div>
  );
};
