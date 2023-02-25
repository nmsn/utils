import React, { useEffect } from 'react';
import { message } from 'antd';

import { useNoRenderState } from '@nmsn/utils';

export default () => {
  const [getNoRenderState, setNoRenderState] = useNoRenderState(0);

  // TODO why show two times
  useEffect(() => {
    message.info('mount');
  });

  return (
    <>
      <button type="button" onClick={() => setNoRenderState(getNoRenderState() + 1)}>
        add
      </button>
      <button
        onClick={() => {
          message.info(getNoRenderState());
        }}
      >
        show
      </button>
    </>
  );
};
