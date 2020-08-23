import React from 'react'
import Mailbox from './Mailbox'
import LoginControl from './LoginControl'
import { messages } from '../assets/data'

const App = () => {
  return (
    <div>
      <h1>Hey there</h1>
      <LoginControl />
      <Mailbox unreadMessages={messages} />
    </div>
  )
}

export default App
