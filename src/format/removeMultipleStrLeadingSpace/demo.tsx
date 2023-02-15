import React from 'react';

import { removeMultipleStrLeadingSpace } from '@nmsn/utils';

export default () => {
  const source = `
  1

  2

  3

  4`;

  const result = removeMultipleStrLeadingSpace(source);
  const result2 = removeMultipleStrLeadingSpace(source, false);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result(keepBlankRow=true): {JSON.stringify(result)}</p>
      <p>result2(keepBlankRow=false): {JSON.stringify(result2)}</p>
    </div>
  );
};
