import React, { useState } from 'react'

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)

    props.onSearch(event)
  }

  return (
    <div className="search__base">
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={handleChange}
        value={searchTerm}
      />
      <p>searching for <strong>{searchTerm}</strong></p>
    </div>
  )
}

export default Search
