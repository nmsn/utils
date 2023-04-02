import React, { useRef } from 'react';
import { message } from 'antd';

import { useClickAway } from '@nmsn/utils';

export default () => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    message.info('Click outside the button');
  });

  return (
    <button ref={ref} onClick={() => message.info('Click the button')}>
      click
    </button>
  );
};
