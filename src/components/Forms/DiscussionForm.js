import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../hooks/UserContext'

const DiscussionForm = () => {
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
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='discussionContainer'>
        <form onSubmit={handleSubmit} className='discussionForm'>
            <div><input type='text' name='title' placeholder='Type your title...' /></div>
            <div><textarea type='text' name='content' placeholder='Explain what you want to discuss...'></textarea></div>
            <button type='submit'>Publish</button>
        </form>
    </div>
  )
}

export default DiscussionForm
