import React from 'react'
import DiscussionForm from '../../components/Forms/DiscussionForm.js'
import PrivateNavbar from '../../components/Navigation/PrivateNavbar.js'

/**
 *
 */
const Discussions = () => {
  return (
    <div>
        <PrivateNavbar />
        <div>
            <DiscussionForm />
        </div>
    </div>
  )
}

export default Discussions
