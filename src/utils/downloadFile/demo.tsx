import React from 'react';

import { downloadFile } from '@nmsn/utils';

const url = 'https://s2.loli.net/2023/04/20/4t8NgpMxkdVCJcs.png';

export default () => {
  return (
    <>
      <img src={url} alt="logo" style={{ width: 200, height: 150 }} />
      <button onClick={() => downloadFile(url)}>click</button>
    </>
  );
};
