import React, { useEffect, useState } from 'react'
import DiscussionForm from '../../components/Forms/DiscussionForm.js'
import PrivateNavbar from '../../components/Navigation/PrivateNavbar.js'
import './Discussions.css'

/**
 *
 */
const Discussions = () => {
  const [discussions, setDiscussions] = useState([])

  useEffect(() => {
    getDiscussions()
  }, [])
  /**
   * Gets all discussions.
   *
   * @param {object} event The data of the event.
   */
  const getDiscussions = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_ACCOUNT_API + '/discussions/all')
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
            <DiscussionForm />
            <div className='discussionFeed'>
                {discussions.map((discussion, index) => <div key={index}>{discussion.title}</div>)}
            </div>
        </div>
    </div>
  )
}

export default Discussions
