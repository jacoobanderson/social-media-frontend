import './FriendCard.css'
import React, { useContext } from 'react'
import { UserContext } from '../../hooks/UserContext'

/**
 *
 * @param root0
 * @param root0.friend
 * @param root0.socket
 * @param root0.setRoom
 */
const FriendCard = ({ friend, socket, setRoom }) => {
  const user = useContext(UserContext).user
  /**
   * Joins a socket room.
   */
  const joinRoom = () => {
    // Sort to get same format for both users.
    const room = [user.id, friend.id].sort((a, b) => (a < b ? -1 : 1))
    setRoom(room[0] + room[1])
    socket.emit('join', [user.id, friend.id])
  }
  return (
    <button onClick={joinRoom} className='friendCard'>
      <img src={friend.image} className='friendimg' alt='Profile Picture' />
      {friend.firstName + ' ' + friend.lastName}
    </button>
  )
}

export default FriendCard
