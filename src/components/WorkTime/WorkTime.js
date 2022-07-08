import React, { useState, useEffect, useContext } from 'react'
import {pomoContext} from '../../contexts/pomo-context'
import TimerCard from '../Timer/TimerCard'
import {BsFillPlayFill, BsPauseCircleFill} from 'react-icons/bs'

const WorkTime = () => {
  const {start, setStart, changeMode, setChangeMode, setDisplayMessage, switchModeHandler} = useContext(pomoContext)


  const [minutes, setMinutes] = useState(5)
  const [seconds, setSeconds] = useState(0)
  

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

  useEffect(() => {
      if(!start){
        return
      }else{
        const interval = setInterval(() => {
          clearInterval(interval)
          
          if(seconds === 0){
            if(minutes === 0){
              setSeconds(59)
              setMinutes(changeMode ? 4 : 1)
              setChangeMode(prevState => !prevState)
              setDisplayMessage('Mode ON')
            }else{
              setSeconds(59)
              setMinutes(prevState => prevState - 1)
            }
          }else{
            setSeconds(prevState => prevState - 1)
          }
    
        }, 1000);
      }
  }, [seconds, start])


  return (
    <>
        <TimerCard>
            <h1>{timerMinutes} : {timerSeconds}</h1>
        </TimerCard>
        

          
        <div className='timer__actions'>
          <button onClick={() => setStart(prevState => !prevState)}>{!start ? <BsFillPlayFill /> : <BsPauseCircleFill />}</button>
          <input type="button" value="switch mode" onClick={switchModeHandler()} />

          <div className="timer__actions-control">
            <label htmlFor="worktime">Set Worktime (in Minutes)</label>
            <input type="number" id='worktime' min={1} max={25} value={minutes} onChange={(e) => setMinutes(e.target.value)} />
          </div>
        </div>

    </>
  )
}

export default WorkTime