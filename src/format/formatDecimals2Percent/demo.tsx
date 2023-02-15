import React from 'react';

import { formatDecimals2Percent } from '@nmsn/utils';

export default () => {
  return (
    <div>
      <p>source: {JSON.stringify(0.1)}</p>
      <p>result: {JSON.stringify(formatDecimals2Percent(0.1))}</p>
      <p>source2: {JSON.stringify(1)}</p>
      <p>result2: {JSON.stringify(formatDecimals2Percent(1))}</p>
    </div>
  );
};
