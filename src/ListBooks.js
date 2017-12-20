import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const ListBooks = ({ books, onSelect, onOpenSearch }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf
          title="Currently Reading"
          books={books.filter(({ status }) => (status === 'reading'))}
          onSelect={onSelect}
        />
        <BookShelf
          title="Want to Read"
          books={books.filter(({ status }) => (status === 'wantToRead'))}
          onSelect={onSelect}
        />
        <BookShelf
          title="Read"
          books={books.filter(({ status }) => (status === 'read'))}
          onSelect={onSelect}
        />
      </div>
    </div>
    <div className="open-search">
      <a onClick={onOpenSearch}>Add a book</a>
    </div>
  </div>
);

ListBooks.PropTypes = {
  books: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onOpenSearch: PropTypes.func.isRequired
};

export default ListBooks
