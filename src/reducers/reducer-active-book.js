export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload
    case 'BOOK_DESELECTED':
      return action.payload
    default:
      return state
  }
}
