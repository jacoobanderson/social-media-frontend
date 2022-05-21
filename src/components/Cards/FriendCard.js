import './FriendCard.css'
import React, { useContext } from 'react'
import { UserContext } from '../../hooks/UserContext'

/**
 *
 * @param root0
 * @param root0.friend
 * @param root0.socket
 * @param root0.setRoom
 * @param root0.currentCardRef
 */
const FriendCard = ({ friend, socket, setRoom, currentCardRef }) => {
  const user = useContext(UserContext).user
  /**
   * Joins a socket room.
   */
  const joinRoom = () => {
    // Sort to get same format for both users.
    const room = [user.id, friend.id].sort((a, b) => (a < b ? -1 : 1))
    setRoom(room[0] + room[1])
    socket.emit('join', [user.id, friend.id])
    currentCardRef.current = friend.id
  }
  return (
    <button data-testid='friendCard' onClick={joinRoom} className={currentCardRef.current === friend.id ? 'friendCard currentCardHighlight' : 'friendCard'} >
      <img data-testid='friendImage' src={friend.image} className='friendimg' alt='Profile Picture' />
      {friend.firstName + ' ' + friend.lastName}
    </button>
  )
}

export default FriendCard
