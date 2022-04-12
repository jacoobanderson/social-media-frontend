import React, { useContext } from 'react'
import { UserContext } from '../hooks/UserContext'

/**
 *
 */
const PrivateOverview = () => {
  const user = useContext(UserContext)
  return (
    <div>PrivateOverview {console.log(user.user)} </div>
  )
}

export default PrivateOverview
