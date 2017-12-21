import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
//      console.log(books);
      this.setState({ books });
    }).catch(console.log);
  }

  openSearch = () => this.setState({ showSearchPage: true });

  closeSearch = () => this.setState({ showSearchPage: false });

  selectBook = (book, value) => {
    let { books } = this.state;
    books = books.filter((b) => b.id !== book.id);
    if (value !== 'none') {
      books = books.concat({
      ...book,
      shelf: value
      });
    }
//    console.log(books);
    this.setState({ books });
    BooksAPI.update(book, value).then(console.log).catch(console.log);
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
            booksOnShelf={this.state.books}
            onCloseSearch={this.closeSearch}
            onSelect={this.selectBook}
          />
        ) : (
          <ListBooks
            booksOnShelf={this.state.books}
            onOpenSearch={this.openSearch}
            onSelect={this.selectBook}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
