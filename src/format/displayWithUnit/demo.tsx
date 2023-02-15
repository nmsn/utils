import { displayWithUnit } from '@nmsn/utils';
import React from 'react';

export default () => {
  const source = [1000, '元'];
  const result = displayWithUnit(1000, '元');
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
    </div>
  );
};
