import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import {FcGoogle} from 'react-icons/fc'
// import { Avatar } from '@mui/material'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__items">
            <div className="navbar__logo">
                <Link to='/'>
                    {/* <img src={logo} alt="logo" /> */}
                    <h2>Productiv<span style={{color: 'gold'}}>Zone</span></h2>
                </Link>
            </div>

            <ul className="navbar__links">
                <li className="navbar__link">
                    <Link to='/todo'>Todo</Link>
                </li>
                <li className="navbar__link">
                    <Link to='/notes'>Notes</Link>
                </li>
                <li className="navbar__link">
                    <Link to='/pomodoro-timer'>Pomodoro</Link>
                </li>
            </ul>

            {/* <div className='signin'>
                <button><span>Sign in with <FcGoogle /></span></button>
            </div> */}
        </div>
    </div>
  )
}

export default Navbar