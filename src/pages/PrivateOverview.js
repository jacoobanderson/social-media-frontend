import React, { useContext, useState } from 'react'
import './PrivateOverview.css'
import PrivateNavbar from '../components/PrivateNavbar.js'
import { UserFeed } from '../hooks/UserFeed.js'
import ProfileSummary from '../components/ProfileSummary'

/**
 * Main private page that shows the matchable users.
 */
const PrivateOverview = () => {
  const users = useContext(UserFeed).users
  const [userIndex, setUserIndex] = useState(0)

  /**
   * Handles the click on connect button, gets the next user by index.
   */
  const handleConnect = () => {
    setUserIndex(userIndex + 1)
  }

  return (
    <div className='overviewcontainer'>
      <PrivateNavbar />
      <ProfileSummary user={users[userIndex]} connectState={userIndex}/>
      <div>
        <button onClick={handleConnect}>Connect</button>
      </div>
    </div>
  )
}

export default PrivateOverview
