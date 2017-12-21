import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const ListBooks = ({ booksOnShelf, onSelect }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf
          title="Currently Reading"
          books={booksOnShelf.filter(({ shelf }) => (shelf === 'currentlyReading'))}
          onSelect={onSelect}
        />
        <BookShelf
          title="Want to Read"
          books={booksOnShelf.filter(({ shelf }) => (shelf === 'wantToRead'))}
          onSelect={onSelect}
        />
        <BookShelf
          title="Read"
          books={booksOnShelf.filter(({ shelf }) => (shelf === 'read'))}
          onSelect={onSelect}
        />
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

ListBooks.propTypes = {
  booksOnShelf: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default ListBooks
