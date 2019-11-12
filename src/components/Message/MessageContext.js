import React, { useState } from 'react'

const MessagesContext = React.createContext({
  messages: [],
  setMessage: () => {}
})

const MessagesContextProvider = (props) => {
  const setMessage = (message) => {
    setState(state => {
      // TODO: Support multiple messages
      return {...state, messages: [message]}
    })
  }
  
  const [state, setState] = useState({ messages: [], setMessage })

  return (
    <MessagesContext.Provider value={state}>
      {props.children}
    </MessagesContext.Provider>
  )
}

export { MessagesContext, MessagesContextProvider }