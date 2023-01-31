import React from 'react';
import { filterObjAttrs } from '@nmsn/utils';

export default () => {
  const source = { a: 1, b: 2, c: 3 };
  const result = filterObjAttrs(source, { filterAttrs: ['a'] });
  const result2 = filterObjAttrs(source, { deleteAttrs: ['a'] });
  const result3 = filterObjAttrs(source, { formatAttrs: [['a', (data: number) => data + 1]] });
  return (
    <div>
      <p>source: {JSON.stringify(source)}</p>
      <p>filterAttrs ['a']: {JSON.stringify(result)}</p>
      <p>deleteAttrs ['a']: {JSON.stringify(result2)}</p>
      <p>formatAttrs ['a' 'a + 1']: {JSON.stringify(result3)}</p>
    </div>
  );
};
