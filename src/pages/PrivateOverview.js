import React, { useEffect, useContext, useState } from 'react'
// import { UserContext } from '../hooks/UserContext'
import './PrivateOverview.css'
import PrivateNavbar from '../components/PrivateNavbar.js'
import { UserFeed } from '../hooks/UserFeed.js'
import ProfileSummary from '../components/ProfileSummary'
// import ProfileSummary from '../components/ProfileSummary.js'
/**
 *
 */
const PrivateOverview = () => {
  const users = useContext(UserFeed).users
  const [userIndex, setUserIndex] = useState(0)

  const handleConnect = () => {
    setUserIndex(userIndex + 1)
  }

  return (
    <div className='overviewcontainer'>
      <PrivateNavbar />
      <ProfileSummary user={users[userIndex]} />
      <div>
        <button onClick={handleConnect} type='submit'>Connect</button>
      </div>
    </div>
  )
}

export default PrivateOverview
