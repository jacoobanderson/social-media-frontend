import React from 'react'
import './Friends.css'
import FriendsList from '../../components/FriendsList/FriendsList.js'
import PrivateNavbar from '../../components/Navigation/PrivateNavbar.js'
import Chat from '../../components/Chat/Chat'

/**
 *
 */
const Friends = () => {
  return (
    <div className='friends'>
      <PrivateNavbar />
      <div className='friendChat'>
        <FriendsList />
        <Chat />
      </div>
    </div>
  )
}

export default Friends
