import React from 'react'
import './Logout.css'
import { useNavigate } from 'react-router-dom'

/**
 *
 */
const Logout = () => {
  const navigate = useNavigate()
  /**
   *
   */
  const handleSubmit = async () => {
    await fetch(process.env.REACT_APP_ACCOUNT_API + '/logout', {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    })
    navigate('/')
  }
  return (
    <div className='logoutbuttondiv'><button className='logoutbutton' onClick={handleSubmit} type='submit'>Log out</button></div>
  )
}

export default Logout
