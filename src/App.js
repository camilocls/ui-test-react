import React from 'react'
import Message from './components/Message/Message'
import { MessagesContextProvider } from './components/Message/MessageContext'
import HomePage from './components/HomePage'

function App() {
  return (
    <MessagesContextProvider>
      <div className="App">
        <HomePage />
        <Message />
      </div>
    </MessagesContextProvider>
  );
}

export default App;
