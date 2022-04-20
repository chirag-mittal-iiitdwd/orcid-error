import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
      <div className='navBarWrapper'>
        <ul className='navBar'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
        </ul>
    </div>
  )
}

export default Navbar