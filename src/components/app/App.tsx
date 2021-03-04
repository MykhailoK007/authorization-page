import React from 'react';
import { Timer } from '../timer/Timer';

export const App = () => {
  return (
    <>
      <Timer
        time={10}
        autoStart={true}
        step={3000}
        onTimeEnd={() => console.log('timer finished')}
        onTimeStarted={() => console.log('timer started')}
        onTimePause={() => console.log('timer paused')}
        onTick={() => console.log('timer tick')}
      />
      <Timer
        time={10}
        autoStart={false}
        step={1000}
        onTimeEnd={() => console.log('timer finished')}
        onTimeStarted={() => console.log('timer started')}
        onTimePause={() => console.log('timer paused')}
        onTick={() => console.log('timer tick')}
      />
      <Timer
        time={2}
        autoStart={false}
        step={2000}
        onTimeEnd={() => console.log('timer finished')}
        onTimeStarted={() => console.log('timer started')}
        onTimePause={() => console.log('timer paused')}
        onTick={() => console.log('timer tick')}
      />
    </>
  );
};
