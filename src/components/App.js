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

const searchedBook = (searchKeyword) => {
  return (item) => {
    item.title.toLowerCase().includes(searchKeyword.toLowerCase())
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list,
      searchKeyword: '',
    }

    this.onDismiss = this.onDismiss.bind(this)
    this.onSearchInput = this.onSearchInput.bind(this)
  }

  onDismiss(id) {
    const { list } = this.state

    const isNotSameId = (item) => {
      return item.objectID !== id
    }

    const updatedBookList = list.filter(isNotSameId)

    console.log(updatedBookList) // logs the remaining book item to the console.

    this.setState({
      list: updatedBookList,
    })
  }

  onSearchInput(e) {
    this.setState({
      searchKeyword: e.target.value,
    })
  }

  render() {
    const { list, searchKeyword } = this.state

    return (
      <div className="base">
        <h1>Hey there! 😉 </h1>
        <Search value={searchKeyword} onChange={this.onSearchInput} />
        <Table list={list} pattern={searchKeyword} onDismiss={this.onDismiss} />
      </div>
    )
  }
}

class Search extends React.Component {
  render() {
    const { value, onChange } = this.props

    return (
      <form>
        <input type="text" name="book" value={value} onChange={onChange} />
      </form>
    )
  }
}

// table component showing list of books.

class Table extends React.Component {
  render() {
    const { list, pattern, onDismiss } = this.props

    return (
      <div>
        {/* undirectional data flow */}
        {list.filter(searchedBook(pattern)).map((item) => {
          // defining the delete event,
          // so it lives inside of the mapped item block
          const handleDismiss = () => {
            onDismiss(item.objectID)
          }

          return (
            <div key={item.objectID}>
              <hr />
              <span>
                Book title: <a href={item.url}>{item.title}</a>
              </span>
              <p>Author: {item.author}</p>
              <p>Number of comments: {item.num_comments}</p>
              <p>Numer of points: {item.points}</p>
              <button onClick={handleDismiss}>Dismiss</button>
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
}
