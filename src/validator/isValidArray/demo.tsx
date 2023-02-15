import React from 'react';

import { isValidArray } from '@nmsn/utils';

export default () => {
  const source = [1];
  const result = isValidArray(source);

  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
    </div>
  );
};
