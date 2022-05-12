import './FriendsList.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FriendCard from '../Cards/FriendCard'

/**
 *
 */
const FriendsList = ({ socket }) => {
  const { id } = useParams()
  const [friends, setFriends] = useState([])

  useEffect(() => {
    getFriends()
  }, [])

  /**
   *
   */
  const getFriends = async () => {
    const response = await fetch(
      process.env.REACT_APP_ACCOUNT_API + `/user/${id}/friends`,
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json'
        }
      }
    )
    setFriends(await response.json())
  }
  return (
    <div className='friendsContainer'>{friends.map((friend) => <FriendCard socket={socket} key={friend.id} friend={friend} />)} </div>
  )
}

export default FriendsList
