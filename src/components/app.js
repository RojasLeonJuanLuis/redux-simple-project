import React from 'react'

import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'

import ErrorBoundary from './error-boundary'

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <BookList />
        <BookDetail />
      </ErrorBoundary>
    </div>
  )
}
export default App
