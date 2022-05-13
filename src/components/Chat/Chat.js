import React, { useState, useEffect, useContext } from 'react'
import './Chat.css'
import { UserContext } from '../../hooks/UserContext'

/**
 *
 * @param root0
 * @param root0.socket
 */
const Chat = ({ socket, room }) => {
  const user = useContext(UserContext).user

  const getMessages = async () => {
    const response = await fetch(process.env.REACT_APP_ACCOUNT_API + '/messages/' + room)
      setDisplay(await response.json())
  }

  useEffect(() => {
    if (room) {
      getMessages()
    }
  }, [room])

  useEffect(() => {
    console.log(room)
    socket.on('message', ({ name, message }) => {
      setDisplay([...display, { name, message }])
    })
  })

  const [value, setValue] = useState({ name: '', message: '' })
  const [display, setDisplay] = useState([])

  /**
   *
   * @param event
   */
  const onSubmit = (event) => {
    console.log(display)
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
    if (display[0]?.message) {
    return display.map(({ name, message }, index) => (
      <div key={index}>
        {name}
        {message}
      </div>
    ))
    }
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
