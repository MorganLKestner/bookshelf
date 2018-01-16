import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookshelfList from './BookshelfList'

class BooksApp extends React.Component {
  state = {
    // books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  // componentDidMount() {
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({books})
  //   })
  // }

  // removeBook = () = {
  //   this.setState((state)=> ({
  //     books: state.book.filter((b) => b.id ==! book.id)
  //   }))
  //   BooksAPI.remove(book)
  // }

  // addBookToList(book) {
  //   BooksAPI.create(book).then(book =>{
  //     this.setState(state => ({
  //       books: state.contacts.concat([ book])
  //     }))
  //   })
  // }

  render() {
    return (
      <div className="app"> 
      <BookshelfList 
        books={this.state.books}
      />  
      </div>
     )
  }
}

export default BooksApp
