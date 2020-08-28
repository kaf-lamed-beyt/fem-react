import React from 'react'

const visitor = prompt('Hey there, may I know your name?')

const Conditional = () => {
  return (
    <div className="conditional__base">
      <h1>
        Hello {visitor ? `${visitor}  😎 ` : 'stranger   😬  🤬 '}, welcome to
        this space.
      </h1>
    </div>
  )
}
