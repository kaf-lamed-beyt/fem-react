import React from 'react'

const List = (props) => {
  return (
    <div className="list__base">
      {props.list.map((item) => {
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
