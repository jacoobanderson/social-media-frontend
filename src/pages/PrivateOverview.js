import React, { useContext } from 'react'
import { UserContext } from '../hooks/UserContext'
import Logout from '../components/Logout.js'
/**
 *
 */
const PrivateOverview = () => {
  const user = useContext(UserContext).user
  return (
    <div>{user.id} {user.username} <Logout /></div>
  )
}

export default PrivateOverview
