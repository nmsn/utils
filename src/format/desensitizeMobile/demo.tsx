import React from 'react';

import { desensitizeMobile } from '@nmsn/utils';

export default () => {
  const source = '13112345678';
  const result = desensitizeMobile(source);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
    </div>
  );
};
