import React from 'react'
import './Logout.css'
import { useNavigate } from 'react-router-dom'

/**
 * Handles the logout functionality.
 *
 * @returns {React.ReactElement} The react component.
 */
const Logout = () => {
  const navigate = useNavigate()

  /**
   * Handles the logout submit.
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
    <div className='logoutbuttondiv'>
      <button className='logoutbutton' onClick={handleSubmit} type='submit'>
        Log out
      </button>
    </div>
  )
}

export default Logout
