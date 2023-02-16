import React, { useState } from 'react';
import { message } from 'antd';

import { useUnmount } from '@nmsn/utils';

const Demo = () => {
  useUnmount(() => {
    message.info('unmount');
  });

  return <p>Hello World!</p>;
};

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setVisible(!visible)}>
        {!visible ? 'unmount' : 'mount'}
      </button>
      {!visible && <Demo />}
    </>
  );
};
