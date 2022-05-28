import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../hooks/UserContext'
import './DiscussionThread.css'

/**
 * The discussion thread component.
 *
 * @param {object} root0 props.
 * @param {object} root0.discussion The discussion object.
 * @returns {React.ReactElement} The thread.
 */
const DiscussionThread = ({ discussion }) => {
  const { id } = useParams()
  const [comments, setComments] = useState(false)
  const [display, setDisplay] = useState([])
  const user = useContext(UserContext).user

  useEffect(() => {
    setDisplay(discussion.replies)
  }, [])

  /**
   * Handles the comment functionality.
   *
   * @param {object} event The event.
   */
  const handleCommentSubmit = async (event) => {
    event.preventDefault()
    try {
      await fetch(
        process.env.REACT_APP_ACCOUNT_API +
          `/discussions/${id}/comments/create`,
        {
          method: 'PATCH',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            content: `${event.target.comment.value}`,
            owner: user.username,
            id: discussion._id
          })
        }
      )
      setDisplay([
        ...display,
        { owner: user.username, content: event.target.comment.value }
      ])
      event.target.comment.value = ''
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='discussionThreadContainer'>
      <h3>
        {discussion.title}: By {discussion.owner}
      </h3>
      <p>{discussion.content}</p>
      <div className=''>
        <button onClick={() => setComments(!comments)}>Show comments</button>: (
        {discussion.replies ? discussion.replies.length : 0})
      </div>
      {comments
        ? (
        <div>
          {display?.map((replies, index) => (
            <div key={index}>
              {replies.owner} {replies.content}
            </div>
          ))}
          <form onSubmit={handleCommentSubmit}>
            <input name='comment' type='text'></input>
            <button type='submit'>Comment</button>
          </form>
        </div>
          )
        : null}
      <div></div>
    </div>
  )
}

export default DiscussionThread
