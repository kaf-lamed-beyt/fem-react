import React from 'react'
import Search from './Search'
import { list } from '../assets/data'

const App = () => {
  return (
    <div className="app__base">
      <Search />
    {list.map(item => {
      return (
        <div key={item.objectID}>
          <h1>Title: {item.title}</h1>
          <p>popularity: {item.points} </p>
        </div>
      )
    })}
    </div>
  )
}

export default App
