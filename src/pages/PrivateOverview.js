import React, { useContext, useState } from 'react'
import './PrivateOverview.css'
import PrivateNavbar from '../components/PrivateNavbar.js'
import { UserFeed } from '../hooks/UserFeed.js'
import ProfileSummary from '../components/ProfileSummary'
import { useParams } from 'react-router-dom'

/**
 * Main private page that shows the matchable users.
 */
const PrivateOverview = () => {
  const { id } = useParams()
  const users = useContext(UserFeed).users
  const [userIndex, setUserIndex] = useState(0)

  /**
   * Handles the click on connect button, gets the next user by index.
   */
  const handleConnect = async () => {
    await connect()
    await checkIfMatch()
    setUserIndex(userIndex + 1)
  }

  /**
   * Handles the click on connect button, gets the next user by index.
   */
  const handleNext = () => {
    next()
    setUserIndex(userIndex + 1)
  }

  /**
   * Checks if there is a match and if so adds to friends.
   */
  const checkIfMatch = async () => {
    const response = await fetch(
      process.env.REACT_APP_ACCOUNT_API + `/user/${id}/friends/check`,
      {
        method: 'PATCH',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id: `${users[userIndex].id}`
        })
      }
    )

    if (response.status === 204) {
      console.log('MAAAAATCH')
    }

    console.log(response)
  }

  /**
   *
   */
  const connect = async () => {
    const response = await fetch(
      process.env.REACT_APP_ACCOUNT_API + `/user/${id}/friends/accept`,
      {
        method: 'PATCH',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id: `${users[userIndex].id}`
        })
      }
    )

    console.log(response)
  }

  /**
   *
   */
  const next = async () => {
    const response = await fetch(
      process.env.REACT_APP_ACCOUNT_API + `/user/${id}/friends/decline`,
      {
        method: 'PATCH',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id: `${users[userIndex].id}`
        })
      }
    )

    console.log(response)
  }

  return (
    <div className='overviewcontainer'>
      <PrivateNavbar />
      <ProfileSummary user={users[userIndex]} connectState={userIndex} />
      <div>
        <button onClick={handleConnect}>Connect</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default PrivateOverview
