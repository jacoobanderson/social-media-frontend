import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navigation/Navbar'
import './NotFound.css'

/**
 * The not found page.
 *
 * @returns {React.ReactElement} The error element.
 */
const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className='notFoundContainer'>
        <h1>404 Not found</h1>
        <h3>
          This page could not be found, return to the homepage{' '}
          <Link to='/'>here.</Link>
        </h3>
      </div>
    </div>
  )
}

export default NotFound
