import React, { useEffect, useState } from 'react'
import DiscussionThread from '../../components/Discussions/DiscussionThread.js'
import DiscussionForm from '../../components/Forms/DiscussionForm.js'
import PrivateNavbar from '../../components/Navigation/PrivateNavbar.js'
import './Discussions.css'

/**
 * The discussion page.
 *
 * @returns {React.ReactElement} The discussions element.
 */
const Discussions = () => {
  const [discussions, setDiscussions] = useState([])

  useEffect(() => {
    getDiscussions()
  }, [])
  /**
   * Gets all discussions.
   */
  const getDiscussions = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_ACCOUNT_API + '/discussions/all'
      )
      const res = await response.json()
      res.reverse()
      setDiscussions(res)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='discussionContainer'>
      <PrivateNavbar />
      <div className='discussionMainContent'>
        <DiscussionForm
          discussions={discussions}
          setDiscussions={setDiscussions}
        />
        <div className='discussionFeed'>
          {discussions.map((discussion, index) => (
            <DiscussionThread
              key={index}
              discussion={discussion}
            ></DiscussionThread>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Discussions
