import React, { useContext } from 'react'
import BreakTime from '../components/BreakTime/BreakTime'
import AltNavbar from '../components/Navbar/AltNavbar'
import WorkTime from '../components/WorkTime/WorkTime'
import {pomoContext} from '../contexts/pomo-context'
import './Pomodoro.css'

const Pomodoro = () => {
  const {changeMode, displayMessage} = useContext(pomoContext)
  console.log(changeMode, displayMessage)

  return (
    <div>
        <AltNavbar />

        <h2 className='pomodoro__title'>{!changeMode ? 'Work ' : 'Break '}{displayMessage}</h2>

        {!changeMode && <WorkTime />}
        {changeMode && <BreakTime /> }

    </div>
  )
}

export default Pomodoro