import React from 'react';

import { isValidObj } from '@nmsn/utils';

export default () => {
  const source = {};
  const result = isValidObj(source);
  const source2 = { a: 1 };
  const result2 = isValidObj(source2);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
      <p>source2: {JSON.stringify(source2)}</p>
      <p>result2: {JSON.stringify(result2)}</p>
    </div>
  );
};
