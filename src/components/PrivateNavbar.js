import React from 'react'
import './PrivateNavbar.css'
import NavUserCard from './NavUserCard.js'
import Logout from './Logout.js'

/**
 *
 */
const PrivateNavbar = () => {
  return (
    <div className='privatenavbarcontainer'>
        <div className='leftprivatenav'>

        </div>
        <div className='rightprivatenav'>
            <NavUserCard />
            <Logout />
        </div>
    </div>
  )
}

export default PrivateNavbar
