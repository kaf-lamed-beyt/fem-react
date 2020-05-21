import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/App'
import TodoList from './components/TodoList'

;<Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/todos" component={TodoList} />
    </Switch>
</Router>

ReactDOM.render(<App />, document.getElementById('root'))

// hot module replacement
if (module.hot) {
    module.hot.accept()
}
