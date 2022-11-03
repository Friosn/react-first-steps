import { useEffect, useState } from 'react';
import React from 'react';

import { MessageComp } from './MessageComp';

export const NewMessageComp = () => {
  const [person, setPerson] = useState({
    name: 'Rodolfo',
    lastName: 'Jijilor',
  });

  useEffect(() => {
    console.log('We call him Jijilor after each render');

    return () => console.log('incluso desmontando el comp');
  });

  return (
    <div>
      <h4>
        {person.name} | {person.lastName}
      </h4>
      <input
        type="text"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        type="text"
        value={person.lastName}
        onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
      />
    </div>
  );
};

export const CodeEffectUpdate = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && <MessageComp />}
      <button onClick={() => setVisible(!visible)}>Who is it?</button>
    </>
  );
};
