import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

/**
 * Represents the navigation bar component.
 *
 * @returns {React.ReactElement} The navigation bar.
 */
const Navbar = () => {
  return (
    <div className='navcontainer'>
      <div className='logo'>
        <Link to='/'>ISIMILAR</Link>
      </div>
      <div className='navlinks'>
        <Link className='signin' to='/login'>
          Sign in
        </Link>
        <Link to='/explore'>Explore</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  )
}

export default Navbar
