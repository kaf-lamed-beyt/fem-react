import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Mailbox from './components/Mailbox'
import LoginControl from './components/LoginControl'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/login" component={LoginControl} />
      <Route path="/mail" component={Mailbox} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
