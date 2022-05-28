import './FriendCard.css'
import React, { useContext } from 'react'
import { UserContext } from '../../hooks/UserContext'

/**
 *
 * @param {object} root0 The props.
 * @param {object} root0.friend The information about the friend.
 * @param {object} root0.socket The socket for the chat.
 * @param {React.SetStateAction} root0.setRoom Sets the current chat room.
 * @param {object} root0.currentCardRef The reference to the current card in the friendsList.
 * @returns {React.ReactElement} Friend card.
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
    <button
      data-testid='friendCard'
      onClick={joinRoom}
      className={
        currentCardRef.current === friend.id
          ? 'friendCard currentCardHighlight'
          : 'friendCard'
      }
    >
      <img
        data-testid='friendImage'
        src={friend.image}
        className='friendimg'
        alt='Profile Picture'
      />
      {friend.firstName + ' ' + friend.lastName}
    </button>
  )
}

export default FriendCard
