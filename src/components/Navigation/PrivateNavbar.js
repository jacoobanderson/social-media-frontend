import React from 'react'
import './PrivateNavbar.css'
import NavUserCard from '../Cards/NavUserCard.js'
import Logout from './Logout.js'
import { Link, useParams } from 'react-router-dom'

/**
 * The navigation bar when logged in.
 *
 * @returns {React.ReactElement} The private navbar.
 */
const PrivateNavbar = () => {
  const { id } = useParams()
  return (
    <div className='privatenavbarcontainer'>
      <div className='leftprivatenav'>
        <Link to={`/${id}/friends`}>Friends</Link>
        <Link to={`/${id}/find`}>Find</Link>
        <Link to={`/${id}/discussions`}>Discussions</Link>
      </div>
      <div className='rightprivatenav'>
        <Link to={`/${id}/profile`}>
          <NavUserCard />
        </Link>
        <Logout />
      </div>
    </div>
  )
}

export default PrivateNavbar
