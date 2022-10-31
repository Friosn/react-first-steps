import { useEffect, useState } from 'react';
import React from 'react';

export const EffectOnLoad = () => {
  const [myName, setMyName] = useState('Pedro');
  console.log(myName);
  useEffect(() => {
    setTimeout(() => {
      setMyName('Curro');
    }, 1500);
  }, [myName]);
  return (
    <>
      <h3>{myName}</h3>
      <input type="text" value={myName} onChange={(e) => setMyName(e.target.value)} />
    </>
  );
};
