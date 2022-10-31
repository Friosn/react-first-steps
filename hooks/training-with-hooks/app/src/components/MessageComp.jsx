import React from 'react';
import { useEffect } from 'react';
export const MessageComp = () => {
  useEffect(() => {
    console.log('I am mounting this DOM dude!');

    return () => {
      console.log('I am unmounting the DOM duh!');
    };
  }, []);
  return <h4>I am a messageEEEEEEEEEEEeEEEeeEEeE</h4>;
};
