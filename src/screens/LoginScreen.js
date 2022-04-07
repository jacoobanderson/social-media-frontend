import React from 'react'
import Navbar from '../components/Navbar.js'
import { useNavigate } from 'react-router-dom'
import './LoginScreen.css'

/**
 * Represents the login screen.
 *
 * @returns {React.ReactElement} The login screen.
 */
const LoginScreen = () => {
  const navigate = useNavigate()
  /**
   * Handles the login when submit is pressed.
   *
   * @param {object} event The data of the event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(
        process.env.REACT_APP_ACCOUNT_API + 'login',
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            username: `${event.target.username.value}`,
            password: `${event.target.password.value}`
          })
        }
      )
      const res = await response.json()
      navigate(`/${res.id}/overview`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='logincontainer'>
      <Navbar />
      <div className='form'>
        <div className='logincard'>
          <form onSubmit={handleSubmit}>
            <h4>Sign in</h4>
            <div className='inputcontainer'>
              <input
                type='text'
                name='username'
                placeholder='Username'
                required
              />
            </div>
            <div className='inputcontainer'>
              <input
                type='password'
                name='password'
                placeholder='Password'
                required
              />
            </div>
            <div className='submit'>
              <input type='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
