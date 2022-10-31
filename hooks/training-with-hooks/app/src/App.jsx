import './App.css';
import { MyState } from './MyState';
import React from 'react';
import { ObjectState } from './ObjectState';
import { EffectOnLoad } from './EffectOnLoad';
import { CodeEffectUnmount } from './CodeEffectUnmount';
import { CodeEffectUpdate, NewMessageComp } from './CodeEffectUpdate';

const App = () => {
  return (
    <div className="App">
      <MyState />
      <ObjectState />
      <EffectOnLoad />
      <CodeEffectUnmount />
      <NewMessageComp />
      <CodeEffectUpdate />
    </div>
  );
};

export default App;
