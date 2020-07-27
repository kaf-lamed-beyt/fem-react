import React, { Component } from 'react'

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: list,
    }
  }

  render() {
    const { list } = this.state

    return (
      <div className="base">
        <h1>Hey there! 😉 </h1>
        {/* undirectional data flow */}
        {list.map((item) => {
          return (
            <div key={item.objectID}>
              <hr />
              <span>
                Book title: <a href={item.url}>{item.title}</a>
              </span>
              <p>Author: {item.author}</p>
              <p>Number of comments: {item.num_comments}</p>
              <p>Numer of points: {item.points}</p>
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
}
