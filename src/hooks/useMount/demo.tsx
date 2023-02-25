import React, { useState } from 'react';
import { message } from 'antd';

import { useMount } from '@nmsn/utils';

const Demo = () => {
  useMount(() => {
    message.info('mount');
  });

  return <p>Hello World!</p>;
};

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setVisible(!visible)}>
        {visible ? 'unmount' : 'mount'}
      </button>
      {visible && <Demo />}
    </>
  );
};
