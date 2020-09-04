import React from 'react'

const Search = props => {
  return (
    <div className="search__base">
      <input
        type="text"
        id="search"
        name="search"
        onChange={props.onSearch}
        value={props.keyword}
      />
      <p>
        searching for <strong>{props.keyword}</strong>
      </p>
    </div>
  )
}

export default Search
