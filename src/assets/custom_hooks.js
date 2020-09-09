import React from 'react'

export const useSemiPersistentState = () => {
  // destructure arbitrary array values
  const [value, setValue] = React.useState(
    localStorage.getItem('value') || ''
  )

  React.useEffect(() => {
    localStorage.setItem('search', value)
  }, [value])

  return [value, setValue]
}
