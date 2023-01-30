import React from 'react';
import { formatDecimals2Percent } from '@nmsn/utils';

export default () => {
  const source = 1;
  const result = formatDecimals2Percent(source);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
    </div>
  );
};
