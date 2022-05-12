import React from 'react'
import './Friends.css'
import FriendsList from '../../components/FriendsList/FriendsList.js'
import PrivateNavbar from '../../components/Navigation/PrivateNavbar.js'
import Chat from '../../components/Chat/Chat'
import io from 'socket.io-client'

const socket = io.connect(process.env.REACT_APP_BASE_URL)
/**
 *
 */
const Friends = () => {
  return (
    <div className='friends'>
      <PrivateNavbar />
      <div className='friendChat'>
        <FriendsList socket={socket}/>
        <Chat socket={socket} />
      </div>
    </div>
  )
}

export default Friends
