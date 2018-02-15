import React from 'react'

import BookList from '../containers/book-list'
import ErrorBoundary from './error-boundary'

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <BookList />
      </ErrorBoundary>
    </div>
  )
}
export default App
