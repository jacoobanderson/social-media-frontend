import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../hooks/UserContext'
import './DiscussionForm.css'

/**
 * The discussion form.
 *
 * @param {object} root0 props.
 * @param {React.SetStateAction} root0.setDiscussions sets the discussions to the display.
 * @param {object} root0.discussions The discussion object.
 * @returns {React.ReactElement} The discussion form.
 */
const DiscussionForm = ({ setDiscussions, discussions }) => {
  const user = useContext(UserContext).user
  const { id } = useParams()
  /**
   * Handles publish discussion functionality.
   *
   * @param {object} event The data of the event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(
        process.env.REACT_APP_ACCOUNT_API + `/discussions/${id}/create`,
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            title: `${event.target.title.value}`,
            content: `${event.target.content.value}`,
            owner: user.username
          })
        }
      )
      const res = await response.json()
      setDiscussions([
        {
          title: event.target.title.value,
          content: event.target.content.value,
          owner: user.username,
          _id: res.id
        },
        ...discussions
      ])
      event.target.title.value = ''
      event.target.content.value = ''
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='discussionFormContainer'>
      <form onSubmit={handleSubmit} className='discussionForm'>
        <div className='discussionFormInput'>
          <input type='text' name='title' placeholder='Type your title...' required />
        </div>
        <div className='discussionFormText'>
          <textarea
            type='text'
            name='content'
            placeholder='Explain what you want to discuss...'
            required
          ></textarea>
        </div>
        <button className='discussionFormButton' type='submit'>
          Publish
        </button>
      </form>
    </div>
  )
}

export default DiscussionForm
