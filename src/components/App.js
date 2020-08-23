import React from 'react'
import Mailbox from './Mailbox'

const UserGreeting = (props) => {
  return <h1>Welcome Back!</h1>
}

const GuestGreeting = (props) => {
  return <h1>Please sign up.</h1>
}

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn

  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

// button components

const LoginButton = (props) => {
  return <button onClick={props.onClick}>Login</button>
}

const LogoutButton = (props) => {
  return <button onClick={props.onClick}>Logout</button>
}

// stateful class component
// to capture button's click state

class LoginControl extends React.Component {
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
      button = <LogoutButton onClick={logout} />
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
