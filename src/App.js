import React from 'react'
import { Router, Route } from 'react-router-dom'
import { history } from './helpers/history'
import Message from './components/Message/Message'
import { MessagesContextProvider } from './components/Message/MessageContext'
import Login from './components/Login/Login'
import { HomePage, HowItWorksPage, PastTrialsPage } from './components/Pages'

function App() {
  return (
    <MessagesContextProvider>
      <Router history={history}>
        <Route exact path="/" component={HomePage} />
        <Route path="/past-trials" component={PastTrialsPage} />
        <Route path="/how-it-works" component={HowItWorksPage} />
      </Router>
      <Message />
      <Login />
    </MessagesContextProvider>
  );
}

export default App;
