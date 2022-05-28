import React from 'react'
import './ChatMessage.css'

/**
 * Displays a chat message.
 *
 * @param {object} root0 props.
 * @param {string} root0.name The name of the sender.
 * @param {string} root0.message The message of the sender.
 * @param {boolean} root0.sender Determines if the message is received or sent.
 * @returns {React.ReactElement} The chat message.
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
