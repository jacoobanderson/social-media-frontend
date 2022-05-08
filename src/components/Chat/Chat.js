import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'


const Chat = () => {
  const socket = io.connect(process.env.REACT_APP_BASE_URL)
  return (
    <div className='chatContainer'>
        <form>
            <div className='chatField'>
            </div>
            <div className='chatInput'>
                <input></input>
            </div>
        </form>
    </div>
  )
}

export default Chat
