import './App.css'
import Login from './pages/Login/Login.js'
import Home from './pages/Home/Home.js'
import Register from './pages/Register/Register.js'
import Profile from './pages/Profile/Profile.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './pages/Private/PrivateRoute.js'
import PrivateOverview from './pages/Private/PrivateOverview.js'
import { UserContext } from './hooks/UserContext.js'
import { UserFeed } from './hooks/UserFeed'
import React, { useState } from 'react'
import Friends from './pages/Friends/Friends'
import Discussions from './pages/Discussions/Discussions'
/**
 * The app.
 *
 * @returns {React.ReactElement} The different pages.
 */
function App () {
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <UserFeed.Provider value={{ users, setUsers }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
              path='/:id/find'
              element={
                <PrivateRoute>
                  <PrivateOverview />
                </PrivateRoute>
              }
            />
            <Route
              path='/:id/profile'
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path='/:id/friends'
              element={
                <PrivateRoute>
                  <Friends />
                </PrivateRoute>
              }
            />
            <Route
              path='/:id/discussions'
              element={
                <PrivateRoute>
                  <Discussions />
                </PrivateRoute>
              }
            />
          </Routes>
        </UserFeed.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
