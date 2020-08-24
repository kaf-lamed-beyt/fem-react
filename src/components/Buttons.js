import React from 'react'
import { Link } from 'react-router-dom'

export const LoginButton = (props) => {
  return <button onClick={props.onClick}>Login</button>
}

export const LogoutButton = (props) => {
  return <button onClick={props.onClick}>Logout</button>
}

// export const LoginRouteButton = () => {
//   return (
//     <button>
//       <Link to="/login">Login</Link>
//     </button>
//   )
// }

// export const MailRouteButton = () => {
//   return (
//     <button>
//       <Link to="/mail">Go to inbox</Link>
//     </button>
//   )
// }
