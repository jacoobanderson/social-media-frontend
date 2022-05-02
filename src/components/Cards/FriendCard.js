import './FriendCard.css'
import React from 'react'

/**
 *
 * @param root0
 * @param root0.friend
 */
const FriendCard = ({ friend }) => {
  return (
    <div className='friendCard'><img src={friend.image} className='friendimg' alt='Profile Picture' />{friend.firstName + ' ' + friend.lastName}</div>
  )
}

export default FriendCard
