import React, { useState } from 'react';

import { usePrevious } from '@nmsn/utils';

export default () => {
  const [state, setState] = useState(0);

  const prev = usePrevious(state);

  return (
    <>
      <button type="button" onClick={() => setState(state + 1)}>
        add
      </button>
      <p>current:{state}</p>
      <p>prev:{prev}</p>
    </>
  );
};
