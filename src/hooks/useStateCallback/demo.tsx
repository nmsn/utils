import React from 'react';
import { message } from 'antd';

import { useStateCallback } from '@nmsn/utils';

export default () => {
  const [state, setState] = useStateCallback(0);

  return (
    <>
      <button
        type="button"
        onClick={() => setState(state + 1, (data: number) => message.info(data))}
      >
        add
      </button>
      <p>state:{state}</p>
    </>
  );
};
