import React from 'react'
import './ChatMessage.css'

const ChatMessage = ({ name, message, sender }) => {
  return (
  <div className={sender ? 'currentUserMessage' : 'userMessage'}>
    <div>{name}</div>
    <div>{message}</div>
  </div>
  )
}

export default ChatMessage