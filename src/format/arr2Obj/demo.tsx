import { arr2Obj } from '@nmsn/utils';
import React from 'react';

export default () => {
  const source = [
    ['key1', '1'],
    ['key2', '2'],
    ['key3', '3'],
  ] as [string, any][];
  const result = arr2Obj(source);
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>result: {JSON.stringify(result)}</p>
    </div>
  );
};
