import './App.css'
import Login from './pages/Login.js'
import Home from './pages/Home.js'
import Register from './pages/Register.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './pages/PrivateRoute.js'
import PrivateOverview from './pages/PrivateOverview.js'
import { UserContext } from './hooks/UserContext.js'
import React, { useState } from 'react'
/**
 * The app.
 *
 * @returns {React.ReactElement} The different pages.
 */
function App () {
  const [user, setUser] = useState({})
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/:id/overview'
            element={
              <PrivateRoute>
                <PrivateOverview />
              </PrivateRoute>
            }
          />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
