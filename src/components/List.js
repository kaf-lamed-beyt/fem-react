import React from 'react'

const List = ({ list }) => {
  return (
    <div className="list__base">
      {list.map(item => {
        return <Item key={item.objectID} item={item} />
      })}
    </div>
  )
}

const Item = ({ item: { title, author } }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  )
}

export default List
