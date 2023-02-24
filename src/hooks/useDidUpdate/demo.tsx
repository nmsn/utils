import React, { useState } from 'react';
import { message } from 'antd';

import { useDidUpdate } from '@nmsn/utils';

export default () => {
  const [dep, setDep] = useState(0);

  useDidUpdate(dep, () => message.info(dep));

  return (
    <>
      <button onClick={() => setDep(dep + 1)}>{JSON.stringify(dep)}</button>
    </>
  );
};
