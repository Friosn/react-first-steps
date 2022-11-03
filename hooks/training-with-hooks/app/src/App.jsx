import './App.css';

import { MyState } from './components/MyState';
import React from 'react';

import { ObjectState } from './components/ObjectState';
import { EffectOnLoad } from './components/EffectOnLoad';
import { CodeEffectUnmount } from './components/CodeEffectUnmount';
import { CodeEffectUpdate, NewMessageComp } from './components/CodeEffectUpdate';
import CodeFetchingInput from './components/CodeFetchingInput';

const App = () => {
  return (
    <div className="App">
      <MyState />
      <ObjectState />
      <EffectOnLoad />
      <CodeEffectUnmount />
      <NewMessageComp />
      <CodeEffectUpdate />
      <CodeFetchingInput />
    </div>
  );
};

export default App;
