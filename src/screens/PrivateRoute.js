import React, { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'

/**
 *
 * @param root0
 * @param root0.children
 */
const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState()
  const { id } = useParams()

  useEffect(() => {
    /**
     *
     */
    async function checkAuth () {
      const auth = await verifyUser()
      setIsAuth(auth)
    }
    checkAuth()
  }, [])
  /**
   * Verifies the user JWT and sets the user info.
   */
  async function verifyUser () {
    const response = await fetch(
      process.env.REACT_APP_ACCOUNT_API + `user/${id}/info`,
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      }
    )
    return response.status === 201
  }
  if (isAuth === undefined) return null
  return isAuth ? children : <Navigate to='/login' />
}

export default PrivateRoute
