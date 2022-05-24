import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navigation/Navbar'
import './Explore.css'

/**
 *
 */
const Explore = () => {
  const [discussions, setDiscussions] = useState([])

  useEffect(() => {
    getDiscussionsWithoutComments()
  }, [])
  /**
   * Gets all discussions.
   *
   * @param {object} event The data of the event.
   */
  const getDiscussionsWithoutComments = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_ACCOUNT_API + '/discussions/all'
      )
      const res = await response.json()
      setDiscussions(res)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='exploreWrapper'>
      <Navbar />
      <div className='exploreHeader'>
        <h1>Our community discussions</h1>
        <p>Sign in to be able to comment the discussions aswell as start on of your own.</p>
        <div className='exploreLink'><Link to='/login'>Sign in to start a discussion!</Link></div>
      </div>
      <div className='exploreGrid'>
        {discussions.map((discussion, index) => (
          <div className='exploreItem' key={index}>
            <div className='exploreTitle'>{discussion.title}</div>
            <div className='exploreContent'>{discussion.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore
