import {useRef,useState} from 'react'
import "./styles.css";

export default function App() {
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);
   const handleStart = () => {
        startTime.current = setInterval(() => {
          setCurrentTime((prevTime) => prevTime + .010)
        }, 10)
  }

  const handleStop = () => {
       clearInterval(startTime.current);
  }

  const handleReset = () => {
     clearInterval(startTime.current);
     setCurrentTime(0);
     setLaps([]);
     intervalRef.current = 0;
  }
   
  const handleLap = () => {
         setLaps([...laps, currentTime]);
         intervalRef.current = 1;
  }

  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>{currentTime.toFixed(3)}</h1>
        <section className='buttons'>
          <button className="start-btn" onClick={handleStart}>START</button>
          <button className="stop-btn" onClick={handleStop}>STOP</button>
          <button className="lap-btn" onClick={handleLap}>LAP</button>
          <button className="reset-btn" onClick={handleReset}>RESET</button>
        </section>
      </section>
      {
        intervalRef.current === 1 && <section className='lap-section'>
        <h2>Laps</h2>
        <section className='laps'>
          {
            laps.map((lap, idx) => (
              <p key={idx}>{lap.toFixed(3)}</p>
            ))
          }
        </section>
      </section>
      }
    </div>
  )
}


