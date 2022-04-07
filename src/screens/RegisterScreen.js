import React from 'react'
import Navbar from '../components/Navbar.js'
import './RegisterScreen.css'

const RegisterScreen = () => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(
        process.env.REACT_APP_ACCOUNT_API + '/register',
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            firstName: `${event.target.firstname.value}`,
            lastName: `${event.target.lastname.value}`,
            email: `${event.target.email.value}`,
            username: `${event.target.username.value}`,
            password: `${event.target.password.value}`
          })
        }
      )
      const res = await response.json()
      console.log(await res)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='registercontainer'>
      <Navbar />
      <div className='form'>
        <div className='registercard'>
          <form onSubmit={handleSubmit}>
            <h4>Register</h4>
            <div className='inputcontainer'>
              <input
                type='text'
                name='firstname'
                placeholder='First name'
                required
              />
            </div>
            <div className='inputcontainer'>
              <input
                type='text'
                name='lastname'
                placeholder='Last name'
                required
              />
            </div>
            <div className='inputcontainer'>
              <input
                type='email'
                name='email'
                placeholder='Email'
                required
              />
            </div>
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

export default RegisterScreen
