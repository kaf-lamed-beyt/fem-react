import React from 'react'
import Search from './Search'
import { list } from '../assets/data'

const App = () => {
  return (
    <div className="app__base">
      <Search id="search" name="search" />
      {list.map((item) => {
        return (
          <div key={item.objectID}>
            <h2>Title: {item.title}</h2>
            <p>popularity: {item.points} </p>
          </div>
        )
      })}
    </div>
  )
}

export default App
