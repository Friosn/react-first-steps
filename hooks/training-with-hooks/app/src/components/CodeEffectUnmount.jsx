import { useState } from 'react';
import React from 'react';

import { MessageComp } from './MessageComp';

export const CodeEffectUnmount = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible && <MessageComp />}
      <button onClick={() => setVisible(!visible)}>I do not know what I am</button>
    </>
  );
};
