import React from 'react'
import './Profile.css'
import PrivateNavbar from '../components/PrivateNavbar.js'
import ProfileDetailed from '../components/ProfileDetailed.js'

/**
 * The profile page.
 *
 * @returns {React.ReactElement} The profile page.
 */
const Profile = () => {
  return (
    <div className='profilecontainer'>
        <PrivateNavbar />
        <ProfileDetailed />
    </div>
  )
}

export default Profile
