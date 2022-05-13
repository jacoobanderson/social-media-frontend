import React, { useState } from 'react'
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
  const [room, setRoom] = useState('')

  return (
    <div className='friends'>
      <PrivateNavbar />
      <div className='friendChat'>
        <FriendsList socket={socket} setRoom={setRoom}/>
        <Chat socket={socket} room={room} />
      </div>
    </div>
  )
}

export default Friends
