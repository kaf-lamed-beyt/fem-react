import React from 'react'
import Search from './Search'
import { list } from '../assets/data'

const App = () => {
  return (
    <div className="app__base">
      <Search />
      {list}
    </div>
  )
}

export default App
