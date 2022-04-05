import React from 'react'
import Navbar from '../components/Navbar.js'
import './HomeScreen.css'
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className='homecontainer'>
        <Navbar />
        <div className='maincontent'>
            <div className='firstsection'>
                <h1>Find other students like you!</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.</h4>
                <Link to='/register'>Join now</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeScreen