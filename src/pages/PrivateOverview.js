import React from 'react'
// import { UserContext } from '../hooks/UserContext'
import './PrivateOverview.css'
import PrivateNavbar from '../components/PrivateNavbar.js'
// import ProfileSummary from '../components/ProfileSummary.js'
/**
 *
 */
const PrivateOverview = () => {
  // const user = useContext(UserContext).user
  return (
    <div className='overviewcontainer'>
      <PrivateNavbar />
    </div>
  )
}

export default PrivateOverview
