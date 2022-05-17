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
  const chatInputRef = useRef(null)

  /**
   *
   */
  const getMessages = async () => {
    const response = await fetch(
      process.env.REACT_APP_ACCOUNT_API + '/messages/' + room
    )
    const res = await response.json()

    // sets the display to empty if there isnt any messages and sets it to the messages if there are.
    if (!res.messages) {
      setDisplay(res)
    } else {
      setDisplay([])
    }
  }

  // Gets the messages of a new room if a new room is accessed.
  useEffect(() => {
    if (room) {
      getMessages()
    }
  }, [room])

  useEffect(() => {
    console.log(room)
    socket.on('message', ({ name, message }) => {
      setDisplay([...display, { name, message }])
      console.log(message)
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
    socket.emit('message', {
      name: user.username,
      message: event.target.message.value
    })
    setValue({ ...value, [user.username]: event.target.message.value })
    console.log(event.target.message.value)
    chatInputRef.current.value = ''
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
          <input ref={chatInputRef} name='message' placeholder='Type your message...'></input>
          <button className='sendButton' type='submit'>
            <svg viewBox="0 0 50 45" className='sendMessageSvg' xmlns="http://www.w3.org/2000/svg" height="28" width="26"><path d="M6 40V8L44 24ZM9 35.35 36.2 24 9 12.5V20.9L21.1 24L9 27ZM9 35.35V24V12.5V20.9V27Z"/></svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Chat
