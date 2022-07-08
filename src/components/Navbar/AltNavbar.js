import React from 'react'
import { useNavigate } from 'react-router-dom'

const AltNavbar = () => {
  const path = window.location.pathname.slice(1).split('-').join(" ");
  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <div className="navbar__items">
            <div className="navbar__logo">
                <h2 style={{textTransform: 'capitalize', color: 'gold'}}>{path}</h2>
            </div>

            <ul className="navbar__links">
                <li className="navbar__link">
                    <h3 onClick={() => navigate(-1)} style={{color: 'white', cursor: 'pointer'}}>Back</h3>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default AltNavbar