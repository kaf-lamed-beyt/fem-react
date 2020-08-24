import React from 'react'

const App = () => {
  const visitor = prompt('Hey there, how are you? may I know your name?')

  return (
    <div className="app__base">
      <h1>
        Hello {visitor ? `${visitor}  😎 ` : 'stranger   😬  🤬 '}, welcome to
        this space.
      </h1>
    </div>
  )
}

export default App
