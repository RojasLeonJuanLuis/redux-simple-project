import { combineReducers } from 'redux'

import booksReducer from './reducer-books'
import ActiveBook from './reducer-active-book'

const rootReducer = combineReducers({
  books: booksReducer,
  activeBook: ActiveBook
})
export default rootReducer
