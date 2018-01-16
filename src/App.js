import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookshelfList from './BookshelfList'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'

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
        <Route exact path='/' render={() => (
          <BookshelfList 
            books={this.state.books}
          />     
      )} />
        <Route path='/search' render={( { history } ) => (
          <SearchBook
            hello world
          />
        )} />
      </div>
     )
  }
}

export default BooksApp
