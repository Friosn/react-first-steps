import { useState } from 'react';
import React from 'react';

//useState Objetos --------------------------

export const ObjectState = () => {
  const [myHouse, setMyHouse] = useState({
    street: 'Argumosa',
    city: 'Madrid',
    country: 'Spain',
  });

  return (
    <>
      <h4>
        {myHouse.street} | {myHouse.city} | {myHouse.country}
      </h4>
      <input
        type="text"
        value={myHouse.street}
        onChange={(e) => setMyHouse({ ...myHouse, street: e.target.value })}
      />
      <input
        type="text"
        value={myHouse.city}
        onChange={(e) => setMyHouse({ ...myHouse, city: e.target.value })}
      />
      <input
        type="text"
        value={myHouse.country}
        onChange={(e) => setMyHouse({ ...myHouse, country: e.target.value })}
      />
    </>
  );
};
