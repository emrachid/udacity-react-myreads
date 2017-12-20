import React from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class SearchBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    onCloseSearch: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query });
  }

  render() {
    const { books, onSelect, onCloseSearch } = this.props;

    let showingBooks = books;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingBooks = books.filter((book) => (
        match.test(book.title) || match.test(book.authors)
      ));
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
            {showingBooks.map((book) => (
              <li key={book.title}>
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
