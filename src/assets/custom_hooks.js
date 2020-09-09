import React from 'react'

export const useSemiPersistentState = () => {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || ''
  )

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])

  return [searchTerm, setSearchTerm]
}
