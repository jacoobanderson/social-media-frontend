import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import './About.css'

const About = () => {
  return (
    <div className='aboutContainer'>
        <Navbar />
        <div className='aboutContentContainer'>
            <div className='aboutHeader'><h1>This is Isimilar</h1></div>
            <div className='aboutContent'>Isimilar is an application that allows students to connect with other student in the similar field, with the focus on technical fields. With Isimilar it is possible to get a summary of other users goals and competence and with that information choose to connect. You can start a chat with the person you find interesting and we encourage you to explore and learn together. Isimilar also allows every user to start discussions to further encourage learning and a good community!</div>
        </div>
    </div>
  )
}

export default About
