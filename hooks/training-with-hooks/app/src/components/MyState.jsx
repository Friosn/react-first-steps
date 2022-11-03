import { useState } from 'react';
import React from 'react';

export const MyState = () => {
  const [myState, setMyState] = useState('Deeply asleep');

  return (
    <>
      <h1>{myState}</h1>
      <input type="text" value={myState} onChange={(e) => setMyState(e.target.value)} />
    </>
  );
};
