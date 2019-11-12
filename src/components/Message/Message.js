import React, { useState, useEffect, useContext, useRef } from 'react'
import { MessagesContext } from './MessageContext'
import iconCheck from '../../assets/icon-check.svg'
import './Message.scss'

const Message = (props) => {
  const { messages: messagesFromContext } = useContext(MessagesContext)
  const [messages, setMessages] = useState(messagesFromContext)
  const messageTimeOut = useRef()

  useEffect(() => {
    if (messagesFromContext.length) {
      setMessages(messagesFromContext)
      const newMessages = messages
      messageTimeOut.current = clearTimeout(messageTimeOut.current)
      
      messageTimeOut.current = setTimeout(() => {
        newMessages.pop()
        setMessages(newMessages)

        messageTimeOut.current = clearTimeout(messageTimeOut.current)
      }, 2000)
    }
  }, [messagesFromContext])
  
  return (
    <div className="global-message">
      {messages.map((message, index) => (
        <div key={index} className="global-message__message">
          <img src={iconCheck} alt="Ok"/> {message}
        </div>
      ))}
    </div>
  )
}

export default Message
