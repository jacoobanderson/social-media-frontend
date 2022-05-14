import React, { useState, useEffect, useContext, useRef } from 'react'
import './Chat.css'
import { UserContext } from '../../hooks/UserContext'
import ChatMessage from './ChatMessage'

/**
 *
 * @param root0
 * @param root0.socket
 * @param root0.room
 */
const Chat = ({ socket, room }) => {
  const user = useContext(UserContext).user
  const [value, setValue] = useState({ name: '', message: '' })
  const [display, setDisplay] = useState([])
  const chatFieldRef = useRef(null)

  /**
   *
   */
  const getMessages = async () => {
    const response = await fetch(
      process.env.REACT_APP_ACCOUNT_API + '/messages/' + room
    )
    const res = await response.json()
    if (!res.messages) {
      setDisplay(res)
    }
  }

  useEffect(() => {
    if (room) {
      getMessages()
    }
  }, [room])

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setDisplay([...display, { name, message }])
    })
  })

  useEffect(() => {
    if (chatFieldRef.current) {
      chatFieldRef.current.scrollTop = chatFieldRef.current.scrollHeight
    }
  })

  /**
   *
   * @param event
   */
  const onSubmit = (event) => {
    event.preventDefault()
    setValue({ ...value, [user.username]: event.target.message.value })
    socket.emit('message', {
      name: user.username,
      message: event.target.message.value
    })
  }

  /**
   * Renders the chat
   */
  const chatRender = () => {
    if (display[0]?.name || display[1]?.name) {
      return display.map(({ name, message }, index) => (
        <ChatMessage key={index} name={name} message={message} sender={name === user.username} />
      ))
    }
  }

  return (
    <div className='chatContainer'>
      <form onSubmit={onSubmit}>
        <div ref={chatFieldRef} className='chatField'>{chatRender()}</div>
        <div className='chatInput'>
          <input name='message' placeholder='Type your message...'></input>
          <button className='sendButton' type='submit'>
            <svg viewBox="0 0 50 45" className='sendMessageSvg' xmlns="http://www.w3.org/2000/svg" height="28" width="26"><path d="M6 40V8L44 24ZM9 35.35 36.2 24 9 12.5V20.9L21.1 24L9 27ZM9 35.35V24V12.5V20.9V27Z"/></svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Chat
