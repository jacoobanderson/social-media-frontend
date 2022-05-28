import React from 'react'
import Navbar from '../../components/Navigation/Navbar.js'
import './Home.css'
import { Link } from 'react-router-dom'

/**
 * Represents the home page.
 *
 * @returns {React.ReactElement} The page.
 */
const Home = () => {
  return (
    <div className='homecontainer'>
      <Navbar />
      <div className='maincontent'>
        <div className='firstsection'>
          <h1 data-testid='homeTitle'>Find other students like you!</h1>
          <h4 data-testid='homeDescription'>
            A place to find likeminded people with the right tools to explore
            and learn together, discuss and chat with the people you meet and
            use the opportunity to help eachother and become great!
          </h4>
          <Link to='/register'>Join now</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
