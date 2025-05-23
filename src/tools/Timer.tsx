// 定时器组件
import { useState, useEffect, useRef } from 'react';
import './Timer.css';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (running) {
      timerRef.current = window.setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, [running]);

  const startTimer = () => {
    if (timerRef.current === null) {
      setRunning(true);
      timerRef.current = window.setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setRunning(false);
    setTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <h2>定时器</h2>
      <p>{formatTime(time)}</p>
      <div className="timer-buttons">
        <button onClick={startTimer}>开始</button>
        <button onClick={stopTimer} disabled={!running}>停止</button>
        <button onClick={resetTimer}>重置</button>
      </div>
    </div>
  );
}

// 将原来的默认导出改为命名导出
export { Timer };
