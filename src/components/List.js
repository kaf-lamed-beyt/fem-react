import React from 'react'


const List = ({ list }) => {
  return (
    
  )
}

//----- second approach ----//
// const List = ({ list }) => {
//   return (
//     <div className="list__base">
//       {list.map(item => {
//         return <Item key={item.objectID} {...item} />
//       })}
//     </div>
//   )
// }

const Item = ({ title, author }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  )
}

export default List
