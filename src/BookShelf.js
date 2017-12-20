import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = ({ title, books, onSelect}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book
              data={book}
              onSelect={onSelect}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default BookShelf
