import React from 'react'

const List = ({ list }) => {
  return (
    <div className="list__base">
      {list.map(item => {
        return (
          <div key={item.objectID}>
            <h2>{item.title}</h2>
            <p>{item.author}</p>
          </div>
        )
      })}
    </div>
  )
}

export default List
