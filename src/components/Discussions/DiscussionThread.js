import React from 'react'
import './DiscussionThread.css'

const DiscussionThread = ({ discussion }) => {
  return (
    <div className='discussionThreadContainer'>
            <h3>{discussion.title}: By {discussion.owner}</h3>
            <p>{discussion.content}</p>
        <div>

        </div>
    </div>
  )
}

export default DiscussionThread
