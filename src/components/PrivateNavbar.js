import React from 'react'
import './PrivateNavbar.css'
import NavUserCard from './NavUserCard.js'
import Logout from './Logout.js'
import { Link, useParams } from 'react-router-dom'

/**
 *
 */
const PrivateNavbar = () => {
  const { id } = useParams()
  return (
    <div className='privatenavbarcontainer'>
        <div className='leftprivatenav'>
            <Link to={`/${id}/friends`}>Friends</Link>
            <Link to={`/${id}/find`}>Find</Link>
        </div>
        <div className='rightprivatenav'>
            <Link to={`/${id}/profile`}><NavUserCard /></Link>
            <Logout />
        </div>
    </div>
  )
}

export default PrivateNavbar
