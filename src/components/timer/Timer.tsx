import React, { useEffect, useState } from 'react';
import classes from './timer.module.scss';

interface TimerProps {
  time: number;
  autoStart: boolean;
  step: number;
}
export const Timer = ({ time, autoStart, step }: TimerProps) => {
  const [currentTime, setCurrentTime] = useState<number>(time);
  const [isTimerLaunched, setTimerLaunched] = useState<boolean>(autoStart);

  useEffect(() => {
    if (isTimerLaunched) {
      interruptTimer();
      const time = setInterval(onTick, step);
      return () => clearInterval(time);
    }
  }, [isTimerLaunched, currentTime]);

  const onTick = (): void => {
    currentTime > 0 ? setCurrentTime(prevProps => prevProps - step / 1000) : setTimerLaunched(false);
  };
  const toggleTimer = (): void => {
    if (currentTime === 0) setCurrentTime(time);
    setTimerLaunched(prevProps => !prevProps);
  };
  const customizeTimeFormat = (time: number): string => {
    let minutes: number = time >= 60 ? Math.floor(time / 60) : 0;
    let seconds: number = Math.floor(time % 60);
    return `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;
  };
  const pauseTimer = (): void => {
    setTimerLaunched(false);
    setCurrentTime(0);
  };
  const interruptTimer = (): void => {
    let nextNumber: number = currentTime - step / 1000;
    if (nextNumber < 0)
      setTimeout(() => {
        pauseTimer();
      }, currentTime * 1000);
  };
  return (
    <>
      <div className={classes.timerScoreboard}>{customizeTimeFormat(currentTime)}</div>
      <button className={classes.toggleBtn} onClick={toggleTimer}>
        {isTimerLaunched ? 'Stop' : 'Start'}
      </button>
      <progress className={classes.progressBar} value={currentTime} max={time} />
    </>
  );
};
