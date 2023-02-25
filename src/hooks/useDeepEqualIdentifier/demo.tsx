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
      <button onClick={() => setDep({ a: 1 })}>{`{ a: 1 }`}</button>
      <button onClick={() => setDep({ a: 2 })} style={{ marginLeft: 8 }}>{`{ a: 2 }`}</button>
      <p>count: {count}</p>
    </>
  );
};
