import React, { useEffect } from 'react'
// import { UserContext } from '../hooks/UserContext'
import './PrivateOverview.css'
import PrivateNavbar from '../components/PrivateNavbar.js'
import { useParams } from 'react-router-dom'
// import ProfileSummary from '../components/ProfileSummary.js'
/**
 *
 */
const PrivateOverview = () => {
  // const user = useContext(UserContext).user
  const { id } = useParams()

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers()
      console.log(users)
    }
    fetchUsers()
  }, [])

  /**
   *
   */
  const getUsers = async () => {
    const response = await fetch(
      process.env.REACT_APP_ACCOUNT_API + `/user/${id}/all`,
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      }
    )
    return await response.json()
  }

  return (
    <div className='overviewcontainer'>
      <PrivateNavbar />
    </div>
  )
}

export default PrivateOverview
