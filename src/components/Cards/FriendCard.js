import './FriendCard.css'
import React, {useContext} from 'react'
import { UserContext } from '../../hooks/UserContext'
import { socket } from 'socket.io-client'

/**
 *
 * @param root0
 * @param root0.friend
 */
const FriendCard = ({ friend, socket }) => {
  const user = useContext(UserContext).user
  const joinRoom = () => {
    socket.emit('join')
  }
  return (
    <div onClick={joinRoom} className='friendCard'><img src={friend.image} className='friendimg' alt='Profile Picture' />{friend.firstName + ' ' + friend.lastName}</div>
  )
}

export default FriendCard
