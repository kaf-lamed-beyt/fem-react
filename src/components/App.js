import React from 'react'
import Search from './Search'
import List from './List'
import { list } from '../assets/data'

const App = () => {
  const stories = list

  const handleSearch = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="app__base">
      <h1>Our hacker stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories}/>
    </div>
  )
}

export default App
