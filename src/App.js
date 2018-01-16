import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookshelfList from './BookshelfList'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []


    // }
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
    //       books: state.books.concat([ book])
    //     }))
    //   })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookshelfList
            books={this.state.books}
          />
        )} />
        <Route path='/search' render={({ history }) => (
          <SearchBook
          // //  onSearchBook={ (book) => {
          // //    this.search(book)
          //  }}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp