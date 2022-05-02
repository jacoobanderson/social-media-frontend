import React, { useContext } from 'react'
import { UserContext } from '../../hooks/UserContext'
import './NavUserCard.css'

/**
 *
 */
const NavUserCard = () => {
  const user = useContext(UserContext).user
  return (
    <div className='navcardcontainer'>
      <div className='navcardimg'><img src={user.image}></img></div>
      <div className='navcardname'>{user.firstname + ' ' + user.lastname}</div>
    </div>
  )
}

export default NavUserCard
