document.addEventListener('DOMContentLoaded', () => {
  import React, { useState } from 'react';

  function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    function startTimer() {
      setIsRunning(true);
      let intervalId = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }

    function pauseTimer() {
      setIsRunning(false);
    }

    function restartTimer() {
      setTime(0);
      setIsRunning(false);
      setLaps([]);
    }

    function addLap() {
      if (isRunning) {
        setLaps([...laps, time]);
      }
    }

    return (
      <div>
        <h1>{time}</h1>
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
        <button onClick={restartTimer}>Restart</button>
        <button onClick={addLap} disabled={!isRunning}>Add Lap</button>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>{lap}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default Timer;
})

