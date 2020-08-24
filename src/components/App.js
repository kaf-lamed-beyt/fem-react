import React from 'react'

const App = () => {
  const visitor = prompt('Hey there, how are you? may I know your name?')

  return (
    <div>
      <h1>Hello {visitor} welcome to my blog.</h1>
      <div></div>
    </div>
  )
}

export default App
