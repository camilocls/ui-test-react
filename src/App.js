import React from 'react'
import { Router, Route } from 'react-router-dom'
import { history } from './helpers/history'
import Message from './components/Message/Message'
import { MessagesContextProvider } from './components/Message/MessageContext'
import HomePage from './components/HomePage'

function App() {
  return (
    <MessagesContextProvider>
      <Router history={history}>
        <Route exact path="/" component={HomePage} />
        <Route path="/past-trials" component={HomePage} />
        <Route path="/how-it-works" component={HomePage} />
        <Route path="/login" component={HomePage} />
      </Router>
      <Message />
    </MessagesContextProvider>
  );
}

export default App;
