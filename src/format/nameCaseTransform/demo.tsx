import React from 'react';
import { nameCaseTransform } from '@nmsn/utils';

export default () => {
  const source = ['aAa', 'snake'];
  const result = nameCaseTransform(source[0], source[1]);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
    </div>
  );
};
