import React from 'react'
import DiscussionForm from '../../components/Forms/DiscussionForm.js'
import PrivateNavbar from '../../components/Navigation/PrivateNavbar.js'
import './Discussions.css'

/**
 *
 */
const Discussions = () => {
  return (
    <div className='discussionContainer'>
        <PrivateNavbar />
        <div className='discussionMainContent'>
            <DiscussionForm />
        </div>
    </div>
  )
}

export default Discussions
