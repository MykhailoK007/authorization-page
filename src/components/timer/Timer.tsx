import React, { useEffect, useState } from 'react';
import classes from './Timer.module.scss';

interface TimerProps {
  time: number;
  autoStart: boolean;
  step: number;
  onTimeEnd(): void;
  onTimeStarted(): void;
  onTimePause(): void;
  onTick(): void;
}
export const Timer = ({
  time,
  autoStart,
  step,
  onTimeEnd,
  onTimeStarted,
  onTimePause,
  onTick
}: TimerProps) => {
  const [currentTime, setCurrentTime] = useState<number>(time);
  const [isTimerLaunched, setIsTimerLaunched] = useState<boolean>(autoStart);

  useEffect(() => {
    if (isTimerLaunched) {
      onTimeStarted();
    }
  }, []);
  useEffect(() => {
    if (isTimerLaunched) {
      interruptTimer();
      const time = setInterval(handleTick, step);
      return () => clearInterval(time);
    }
  }, [isTimerLaunched, currentTime]);

  const handleTick = (): void => {
    currentTime > 0 ? setCurrentTime(prevProps => prevProps - step / 1000) : setIsTimerLaunched(false);
    onTick();
  };
  const toggleTimer = (): void => {
    if (currentTime === 0) setCurrentTime(time);
    setIsTimerLaunched(prevProps => !prevProps);
    isTimerLaunched ? onTimePause() : onTimeStarted();
  };
  const customizeTimeFormat = (time: number): string => {
    let minutes: number = time >= 60 ? Math.floor(time / 60) : 0;
    let seconds: number = Math.floor(time % 60);
    return `${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;
  };
  const pauseTimer = (): void => {
    setIsTimerLaunched(false);
    setCurrentTime(0);
  };
  const interruptTimer = (): void => {
    let nextNumber: number = currentTime - step / 1000;
    if (nextNumber < 0)
      setTimeout(() => {
        pauseTimer();
        onTimeEnd();
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
