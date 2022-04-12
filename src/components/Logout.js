import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  const handleSubmit = async () => {
      await fetch(process.env.REACT_APP_ACCOUNT_API + '/logout', {
          method: 'GET',
          credentials: 'include',
          mode: 'cors'
      })
      navigate('/')
  }
  return (
    <div><input onClick={handleSubmit} type='submit' /></div>
  )
}

export default Logout