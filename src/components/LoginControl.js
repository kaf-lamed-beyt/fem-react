import React from 'react'
import { LoginButton, LogoutButton } from './Buttons'
import Greeting from './Greetings'

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true,
    }

    this.onLogin = this.onLogin.bind(this)
    this.onLogout = this.onLogout.bind(this)
  }

  onLogin() {
    console.log("you're logged in")
    this.setState({
      isLoggedIn: true,
    })
  }

  onLogout() {
    console.log("you're logged out")
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    //  destructuring component state assignment
    const { isLoggedIn } = this.state
    let button

    // shortening constructor methods
    const login = this.onLogin
    const logout = this.onLogout

    if (isLoggedIn) {
      button = <LoginButton onClick={login} />
    } else {
      button = <LogoutButton onClick={logout} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        <p>
          The user is {isLoggedIn ? 'currently' : 'currently not'} logged in.
        </p>
        {button}
      </div>
    )
  }
}
