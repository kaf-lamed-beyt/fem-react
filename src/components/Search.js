import React, { useState } from 'react'

const Search = (props) => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    console.log(e)

    setSearch(e.target.value)
  }

  return (
    <div className="search__base">
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={handleSearch}
        value={search}
      />
    </div>
  )
}

export default Search
