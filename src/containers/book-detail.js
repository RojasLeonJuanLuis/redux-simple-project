import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deselectedBook } from '../actions/index'

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div>Select a book</div>
    }
    return (
      <div>
        <div>Details for:</div>
        <h3 onClick={() => delete this.props.book}>{this.props.book.title}</h3>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deselectedBook }, dispatch)
}
function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)
