import './FriendCard.css'
import React from 'react'

const FriendCard = ({ friend }) => {
  return (
    <div>{friend.firstName + ' ' + friend.lastName}</div>
  )
}

export default FriendCard