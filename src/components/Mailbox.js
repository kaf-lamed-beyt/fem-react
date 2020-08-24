import React from 'react'
import { messages } from '../assets/data'

const Mailbox = (props) => {
  // const unreadMessages = props.unreadMessages
  const unreadMessages = messages

  return (
    <div>
      <h1>Hello</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  )
}

export default Mailbox
