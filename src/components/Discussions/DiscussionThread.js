import React, { useState } from 'react'
import './DiscussionThread.css'

const DiscussionThread = ({ discussion }) => {
  const [comments, setComments] = useState(false)
  return (
    <div className='discussionThreadContainer'>
            <h3>{discussion.title}: By {discussion.owner}</h3>
            <p>{discussion.content}</p>
            <div className=''><button onClick={() => setComments(!comments)}>Comments</button>: ({discussion.replies ? discussion.replies.length : 0})</div>
        {comments ? <div>{discussion.replies?.map((replies, index) => <div key={index}>test</div>)}<div><input type='text'></input></div></div> : null}
        <div>

        </div>
    </div>
  )
}

export default DiscussionThread
