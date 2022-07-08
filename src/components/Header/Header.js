import React from 'react'
import './Header.css'
import image from '../../assets/header.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="header__text">
            <h1>One-Stop Productivity Application</h1>
            <p>Boost your daily productivity with todo cards, note taker and pomodoro timer in this light-weighted all-in-one application.</p>
        </div>
        <img src={image} alt="header" />
    </div>
  )
}

export default Header