import './App.css'
import LoginScreen from './screens/LoginScreen.js'
import HomeScreen from './screens/HomeScreen.js'
import RegisterScreen from './screens/RegisterScreen.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './screens/PrivateRoute.js'
import PrivateOverview from './screens/PrivateOverview.js'
import React from 'react'

/**
 * The app.
 *
 * @returns {React.ReactElement} The different screens.
 */
function App () {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/:id/overview' element={
            <PrivateRoute>
              <PrivateOverview />
            </PrivateRoute>
          }
          />
        </Routes>
    </BrowserRouter>
  )
}

export default App
