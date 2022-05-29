import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import './About.css'

/**
 * The about page.
 *
 * @returns {React.ReactElement} The about element.
 */
const About = () => {
  return (
    <div className='aboutContainer'>
      <Navbar />
      <div className='aboutContentContainer'>
        <div className='aboutHeader'>
          <h1>This is Isimilar</h1>
        </div>
        <div className='aboutContent'>
          Isimilar is an application that allows students to connect with other
          student in the similar field, with the focus on technical fields. With
          Isimilar it is possible to get a summary of other users goals and
          competence and with that information choose to connect. You can start
          a chat with the person you find interesting and we encourage you to
          explore and learn together. Isimilar also allows every user to start
          discussions to further encourage learning and a good community!
          <br />
          The information used in your account is stored in our database and is
          used only for the purpose of the functionality of the application to
          allow you as an user to use the application as intended. The account
          information needed to authenticate yourself is protected by salting
          and hashing which means that no one has access to your account. The
          information you put in your profile will be shown to other users to
          allow you and others to connect with you. Messages that you send to
          other users are also stored to make the experience a lot better. You
          can easily delete your own information on the application by doing so
          in your profile.
        </div>
      </div>
    </div>
  )
}

export default About
