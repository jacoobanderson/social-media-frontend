import React from 'react'
import './Friends.css'
import FriendsList from '../components/FriendsList.js'
import PrivateNavbar from '../components/PrivateNavbar'

/**
 *
 */
const Friends = () => {
  return (
    <div className='friends'><PrivateNavbar/> <FriendsList /></div>
  )
}

export default Friends
