import React, { useState, useEffect, useContext } from 'react'
import './Chat.css'
import { UserContext } from '../../hooks/UserContext'

/**
 *
 * @param root0
 * @param root0.socket
 */
const Chat = ({ socket }) => {
  const user = useContext(UserContext).user

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setDisplay([...display, { name, message }])
    })

    socket.on('message', ({ from }) => {
      console.log(from)
    })
  })

  const [value, setValue] = useState({ name: '', message: '' })
  const [display, setDisplay] = useState([])

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
   *
   */
  const chatRender = () => {
    return display.map(({ name, message }, index) => (
      <div key={index}>
        {name}
        {message}
      </div>
    ))
  }

  return (
    <div className='chatContainer'>
      <form onSubmit={onSubmit}>
        <div className='chatField'>{chatRender()}</div>
        <div className='chatInput'>
          <input name='message'></input>
          <input type='submit' />
        </div>
      </form>
    </div>
  )
}

export default Chat
