import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'
import { search } from './BooksAPI'

class SearchBook extends Component {
  // static propTypes = {

  //   books: PropTypes.array.isRequired,
  // }

  state = {
    // variable array
    books: []

  }

  // updateQuery = (query) => {
  //   this.setState({query: query.trim() })
  // }

  // clearQuery = () => {
  //   this.setState( {query: ''})
  // }


  handleOnSubmit = (e) => {
    // prevents clearing the form
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    // if (this.props.onSearchBook)
    //   this.props.onSearchBook(values)
    console.log(values.searchTerm)

    search(values.searchTerm).then((books) => {
      console.log(books)
      if (books.error) {
        this.setState( { books: [] } )
      } else {
        this.setState({ books })
      }
    })
  }

  render() {
    // const { books } = this.props
    // const { query } = this.state
    const { books } = this.state


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/* GET Books API */}
            <form onSubmit={this.handleOnSubmit} >
              <input
                type="text"
                name="searchTerm"
                placeholder="Search by title or author"
              //  value={this.state.query} 
              //  onChange={(event) => this.updateQuery(event.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => {

              return <li key={book.id} className='list-book-item'>{book.id}</li>

            })}

            {/* Display search results here 
                 <li key={book.id} className='list-book-item'></li>*/}
          </ol>
        </div>
      </div>
    )
  }
}
export default SearchBook

