import React from 'react'

export default function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

export default function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}