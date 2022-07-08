import React from 'react'
import './TimerCard.css'

const TimerCard = (props) => {
  return (
    <div className='timercards'>
        <div className="timercard">
            {props.children}
        </div>
    </div>
  )
}

export default TimerCard