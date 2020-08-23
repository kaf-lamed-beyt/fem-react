import React from 'react'
import Mailbox from './Mailbox'
import LoginControl from './LoginControl'


// stateful class component
// to capture button's click state


const messages = [
  'React',
  'Re: React',
  'Re:Re: React',
  'Babalawo',
  'Awo Jesu',
  'Lion of the tribe of judah',
  'blah blah',
  'Orisabunmi',
  'more blah blah blah',
  'No one knows tomorrow, Asa',
]

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
