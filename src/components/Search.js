import React from 'react'

const Search = (props) => {
  return (
    <div className="search__base">
      <input type={props.type} id={props.id} name={props.name} />
    </div>
  )
}

export default Search
