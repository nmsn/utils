import { addThousandSeparator } from '@nmsn/utils';
import React from 'react';

export default () => {
  return (
    <div>
      <p>source: {JSON.stringify(10000.002)}</p>
      <p>result: {JSON.stringify(addThousandSeparator(10000.002))}</p>
      <p>source2: {JSON.stringify(-20000.1)}</p>
      <p>result2: {JSON.stringify(addThousandSeparator(-20000.1))}</p>
    </div>
  );
};
