import React from 'react'
import Search from './Search'
import List from './List'

const App = () => {
  return (
    <div className="app__base">
      <Search type="text" id="search" name="search" />
      <hr />
      <List />
    </div>
  )
}

export default App
