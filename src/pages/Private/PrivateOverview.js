import React, { useContext, useState } from 'react'
import './PrivateOverview.css'
import PrivateNavbar from '../../components/Navigation/PrivateNavbar.js'
import { UserFeed } from '../../hooks/UserFeed.js'
import ProfileSummary from '../../components/Profiles/ProfileSummary'
import { Link, useParams } from 'react-router-dom'

/**
 * Main private page that shows the matchable users.
 */
const PrivateOverview = () => {
  const { id } = useParams()
  const users = useContext(UserFeed).users
  const [userIndex, setUserIndex] = useState(0)
  const [match, setMatch] = useState(false)

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
  const handleNext = async () => {
    await next()
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
      setMatch(true)
    }
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
      <div className='feed'>
        {match
          ? (
          <div className='matchPopUp'>
            <button onClick={() => setMatch(false)}>Close</button>
            <h2>You just got a new friend!</h2>
            <Link to={`/${id}/friends`}>Click here to say hello</Link>
          </div>
            )
          : null}
        <ProfileSummary user={users[userIndex]} connectState={userIndex} />
        <div>
          <button onClick={handleConnect}>Connect</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default PrivateOverview
