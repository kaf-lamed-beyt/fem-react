import React from 'react'
import { messages } from '../assets/data'

const Mailbox = () => {
  // const unreadMessages = props.unreadMessages
  const unreadMessages = messages

  const name = prompt('what is your name')

  return (
    <div>
      <h1>Hello {name}, how are you? 😎 </h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  )
}

export default Mailbox
