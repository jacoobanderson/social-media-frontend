import './FriendsList.css'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import FriendCard from '../Cards/FriendCard'

/**
 *
 * @param root0
 * @param root0.socket
 * @param root0.setRoom
 */
const FriendsList = ({ socket, setRoom }) => {
  const { id } = useParams()
  const [friends, setFriends] = useState([])
  const currentCardRef = useRef(null)

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
    <div className='friendsContainer' data-testid='friendsListTest'>
      {friends.length > 0
        ? friends.map((friend) => (
        <FriendCard socket={socket} key={friend.id} friend={friend} setRoom={setRoom} currentCardRef={currentCardRef} />
        ))
        : <div className='noFriends'>No friends yet..</div>}
    </div>
  )
}

export default FriendsList
