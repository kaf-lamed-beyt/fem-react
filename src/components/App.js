import React from 'react'
import Table from './Table'
import LoginControl from './LoginControl'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Table isLoggedIn={false}/>
        <LoginControl />
      </div>
    )
  }
}

