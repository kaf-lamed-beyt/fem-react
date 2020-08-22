import React from 'react'
import { Greeting } from './Table'


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn : false
        }

        this.onLoginClick = this.onLoginClick.bind(this)
        this.onLogoutClick = this.onLogoutClick.bind(this)
    }
    
    onLoginClick() {
        this.setState({
            isLoggedIn: true
        })
    }

    onLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }

    render () {
        // destructuring state variable
        const { isLoggedIn } = this.state

        // storing the event handlersin variable names
        // so it'd be easey for me to call.

        const onLogin = this.onLoginClick
        const onLogout = this.onLogoutClick

     
        let button;

        // conditional rendering logic
        if (isLoggedIn) {
            button = <LogoutButton onClick={onLogout} />
        } else {
            button = <LoginButton onClick={onLogin} />
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}