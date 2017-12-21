import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
  static propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    onCloseSearch: PropTypes.func.isRequired
  }

  state = {
    query: '',
    queryResult: []
  }

  updateQuery = (query) => {
    console.log(query);
    if (query) {
      this.setState({ query });
      BooksAPI.search(query).then((result) => {
        console.log(result);
        if (result && !result.error) {
          this.setState({ queryResult: result });
        } else {
          this.setState({ queryResult: [] });
        }
      }).catch((e) => {
        this.setState({ queryResult: [] });
        console.log(e);
      });
    } else {
      this.setState({ query: [] });
      this.setState({ queryResult: [] });
    }
  }

  render() {
    const { booksOnShelf, onSelect, onCloseSearch } = this.props;

    let showingBooks = this.state.queryResult;
    if (this.state.query && showingBooks) {
      showingBooks.forEach((showingBook) => {
        let bookFoundOnShelf = booksOnShelf.find((bookOnShelf) => (
          bookOnShelf.id === showingBook.id)
        );
        if (bookFoundOnShelf) {
          // If books returned from query is found on shelf, add shelf value on them.
          showingBook.shelf = bookFoundOnShelf.shelf;
          console.log(showingBook);
        } else {
          showingBook.shelf = 'none';
        }
      });
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={onCloseSearch}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks && showingBooks.map((book) => (
              <li key={book.id}>
                <Book data={book} onSelect={onSelect}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
