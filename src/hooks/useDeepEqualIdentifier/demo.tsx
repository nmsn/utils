import React, { useEffect, useState } from 'react';
import { message } from 'antd';

import { useDeepEqualIdentifier } from '@nmsn/utils';

export default () => {
  const [dep, setDep] = useState({ a: 1 });

  const count = useDeepEqualIdentifier(dep);

  useEffect(() => {
    message.info('Changed!');
  }, [count]);

  return (
    <>
      <button onClick={() => setDep({ a: 1 })}>{JSON.stringify({ a: 1 })}</button>
      <button onClick={() => setDep({ a: 2 })}>{JSON.stringify({ a: 2 })}</button>
      <p>count: {count}</p>
    </>
  );
};
