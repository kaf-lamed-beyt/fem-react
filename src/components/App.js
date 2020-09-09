import React from 'react'
import Search from './Search'
import List from './List'
import { list } from '../assets/data'
import { useSemiPersistentState } from '../assets/custom_hooks'

const App = () => {
  const stories = list

  const [searchTerm, setSearchTerm] = useSemiPersistentState()
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  // pass an handler that filters
  // the search keyword before rendering the
  // list in the app component

  const searchedStories = stories.filter(story => {
    return story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  })

  return (
    <div className="app__base">
      <h1>Our hacker stories</h1>
      <Search onSearch={handleSearch} keyword={searchTerm} />
      <hr />
      <List list={searchedStories} />
    </div>
  )
}

export default App
