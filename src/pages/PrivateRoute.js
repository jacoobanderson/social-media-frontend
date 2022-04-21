import React, { useState, useEffect, useContext } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { UserContext } from '../hooks/UserContext.js'
import { UserFeed } from '../hooks/UserFeed.js'

/**
 * Acts like a gateway to the private page.
 *
 * @param {React.ReactElement} root0 props.
 * @param {React.ReactElement} root0.children The children elements.
 * @returns {React.ReactElement} The element.
 */
const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState()
  const { id } = useParams()
  const { setUser } = useContext(UserContext)
  const { setUsers } = useContext(UserFeed)

  useEffect(() => {
    /**
     *
     */
    async function checkAuth () {
      const auth = await verifyUser()
      setIsAuth(auth)
    }

    getUsers()
    checkAuth()
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
    setUsers(await response.json())
  }

  /**
   * Verifies the user JWT and sets the user info.
   */
  async function verifyUser () {
    const response = await fetch(
      process.env.REACT_APP_ACCOUNT_API + `/user/${id}/info`,
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      }
    )
    setUser(await response.json())
    return response.status === 201
  }
  if (isAuth === undefined) return null
  return isAuth ? children : <Navigate to='/login' />
}

export default PrivateRoute
