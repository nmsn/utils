import React, { useState } from 'react';
import { message } from 'antd';

import { useOpen } from '@nmsn/utils';

export default () => {
  const [visible, setVisible] = useState(false);
  useOpen(visible, () => {
    message.info('Opened');
  });

  return (
    <>
      <button type="button" onClick={() => setVisible(!visible)}>
        {visible ? 'close' : 'open'}
      </button>
    </>
  );
};
