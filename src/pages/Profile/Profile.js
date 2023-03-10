import React, { useContext } from 'react'
import './Profile.css'
import PrivateNavbar from '../../components/Navigation/PrivateNavbar.js'
import ProfileDetailed from '../../components/Profiles/ProfileDetailed.js'
import { UserContext } from '../../hooks/UserContext'

/**
 * The profile page.
 *
 * @returns {React.ReactElement} The profile page.
 */
const Profile = () => {
  const user = useContext(UserContext).user
  return (
    <div className='profilecontainer'>
      <PrivateNavbar />
      <ProfileDetailed user={user} />
    </div>
  )
}

export default Profile
