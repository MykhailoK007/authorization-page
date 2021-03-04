import React from 'react';
import { Timer } from '../timer/Timer';

export const App = () => {
  return (
    <>
      <Timer time={10} autoStart={true} step={3000} />
      <Timer time={10} autoStart={true} step={1000} />
      <Timer time={5} autoStart={false} step={2000} />
    </>
  );
};

export default App;
