import React from 'react'

const DEFAULT_QUERY = 'redux'

const API_URL = `htpps://hn.algolia.com/api/v1${API_ENDPOINT}${ENDPOINT_PARAM}`
const API_ENDPOINT = '/search'
const ENDPOINT_PARAM = 'query='


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    }

    this.setSearchTopStories = this.setSearchTopStories.bind(this)
  }

  setSearchTopStories() {
    this.setState({
      result,
    })
  }

  componentDidMount() {
    const { searchTerm } = this.state

    fetch(`${API_URL}${searchTerm}`)
      .then((response) => {
        response.json()
      })
      .then((result) => {
        console.log(result)
        // setSearchTopStories(result)
      })
      .catch((error) => error)
  }

  render() {
    return <div></div>
  }
}
