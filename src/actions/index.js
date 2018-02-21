export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
export function deselectedBook(book) {
  return {
    type: 'BOOK_DESELECTED',
    payload: book
  }
}
