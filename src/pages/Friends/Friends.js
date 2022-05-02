import React from 'react'
import './Friends.css'
import FriendsList from '../../components/FriendsList/FriendsList.js'
import PrivateNavbar from '../../components/Navigation/PrivateNavbar.js'

/**
 *
 */
const Friends = () => {
  return (
    <div className='friends'><PrivateNavbar/> <FriendsList /></div>
  )
}

export default Friends
