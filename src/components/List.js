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

const Item = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.author}</p>
    </div>
  )
}

export default List

// --- third approach ---//
//const List = ({ list }) => {
//  return (
//    list.map(({ ObjectID, ...item}) => {
// mapping the properties of the list object
// and taking/seperating the ObjectID key
// from the object itself by using the Rest
// parameter to  include the remaining items
// spreading them (the keys) `{..item}` as properties
// in the Item component.
//      <Item key={ObjectID} {...item} />
//    })
//  )
//}

// const Item = ({ title, author }) => {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{author}</p>
//     </div>
//   )
// }

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
