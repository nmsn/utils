import React from 'react';

import { isAsyncFunction } from '@nmsn/utils';

export default () => {
  const source = async () => ({});
  const result = isAsyncFunction(source);
  // FIXME 编译结果变成了 [object Function]
  return (
    <div>
      <p>source: {`async () => ({})`}</p>
      <p>result: {JSON.stringify(result)}</p>
    </div>
  );
};
