import React, { useState } from 'react';

import { useRenderCount } from '@nmsn/utils';

export default () => {
  const [state, setState] = useState(0);

  const [renderCount, isFirstRender] = useRenderCount();

  return (
    <>
      <button type="button" onClick={() => setState(state + 1)}>
        render
      </button>
      <p>renderCount:{renderCount}</p>
      <p>isFirstRender:{isFirstRender.toString()}</p>
    </>
  );
};
