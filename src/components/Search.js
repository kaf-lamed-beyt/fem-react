import React from 'react'

const Search = ({ keyword, onSearch }) => {
  // destructuring props to handle data
  return (
    <div className="search__base">
      <input
        type="text"
        id="search"
        name="search"
        onChange={onSearch}
        value={keyword}
      />
      <p>
        searching for <strong>{keyword}</strong>
      </p>
    </div>
  )
}

export default Search
