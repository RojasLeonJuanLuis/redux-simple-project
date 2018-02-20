import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    console.log(this.props.book);
    if(!this.props.book) {
      return <div>Select a book</div>
    }
    return (
      <div>
        <div>Details for:</div>
        <h3>{this.props.book.title}</h3>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}
export default connect(mapStateToProps)(BookDetail)
