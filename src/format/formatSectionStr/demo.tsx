import React from 'react';

import { formatSectionStr } from '@nmsn/utils';

export default () => {
  return (
    <div>
      <p>source: {JSON.stringify('123-123')}</p>
      <p>result: {JSON.stringify(formatSectionStr('123-123', '-'))}</p>
      <p>source2: {JSON.stringify('123-456')}</p>
      <p>result2: {JSON.stringify(formatSectionStr('123-456', '-'))}</p>
      <p>source3: {JSON.stringify([123, 123])}</p>
      <p>result3: {JSON.stringify(formatSectionStr([123, 123], '-'))}</p>
      <p>source4: {JSON.stringify([123, 456])}</p>
      <p>result5: {JSON.stringify(formatSectionStr([123, 456], '-'))}</p>
    </div>
  );
};
