import React, { useState, useEffect, useContext } from 'react'
import io from 'socket.io-client'
import './Chat.css'
import { UserContext } from '../../hooks/UserContext'

const socket = io.connect(process.env.REACT_APP_BASE_URL)

const Chat = () => {
  const user = useContext(UserContext).user
    

 useEffect(() => {
     socket.on('message', ({ name, message }) => {
         setDisplay([...display, { name, message }])
     })
 })
  const [value, setValue] = useState({ name: '', message: '' })
  const [display, setDisplay] = useState([])

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.message.value)
    setValue({ ...value, [user.username]: event.target.message.value })
    socket.emit('message', { name: user.username, message: event.target.message.value })  
  }

  const chatRender = () => {
      return display.map(({name, message}, index) => (
          <div key={index}>
              {name}
              {message}
          </div>
      ))
  }

  return (
    <div className='chatContainer'>
        <form onSubmit={onSubmit}>
            <div className='chatField'>
                {chatRender()}
            </div>
            <div className='chatInput'>
                <input name='message'></input>
                <input type='submit' />
            </div>
        </form>
    </div>
  )
}

export default Chat
