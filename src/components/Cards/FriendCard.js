import './FriendCard.css'
import React, { useContext } from 'react'
import { UserContext } from '../../hooks/UserContext'

/**
 *
 * @param root0
 * @param root0.friend
 * @param root0.socket
 */
const FriendCard = ({ friend, socket }) => {
  const user = useContext(UserContext).user
  /**
   *
   */
  const joinRoom = () => {
    socket.emit('join', [user.id, friend.id])
  }
  return (
    <div onClick={joinRoom} className='friendCard'>
      <img src={friend.image} className='friendimg' alt='Profile Picture' />
      {friend.firstName + ' ' + friend.lastName}
    </div>
  )
}

export default FriendCard
