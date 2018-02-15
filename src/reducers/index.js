import { combineReducers } from 'redux'

import booksReducer from './reducer-books'

const rootReducer = combineReducers({
  books: booksReducer
})
export default rootReducer
