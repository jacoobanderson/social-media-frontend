import React from 'react'
import './ChatMessage.css'

/**
 *
 * @param root0
 * @param root0.name
 * @param root0.message
 * @param root0.sender
 */
const ChatMessage = ({ name, message, sender }) => {
  return (
  <div className={sender ? 'messageContainer' : 'messageContainerTwo'}>
    <div className={sender ? 'currentUserMessage' : 'userMessage'}>
        <div>{message}</div>
    </div>
  </div>
  )
}

export default ChatMessage
