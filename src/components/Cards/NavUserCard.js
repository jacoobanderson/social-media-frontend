import React, { useContext } from 'react'
import { UserContext } from '../../hooks/UserContext'
import './NavUserCard.css'

/**
 * The navigation user card that contains full name and image.
 *
 * @returns {React.ReactElement} The card.
 */
const NavUserCard = () => {
  const user = useContext(UserContext).user
  return (
    <div className='navcardcontainer'>
      <div className='navcardimg'>
        <img src={user.image}></img>
      </div>
      <div className='navcardname'>{user.firstname + ' ' + user.lastname}</div>
    </div>
  )
}

export default NavUserCard
