import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const shelfs = [
  {
    id: 'currentlyReading',
    title: 'Currently Reading',
  },
  {
    id: 'wantToRead',
    title: 'Want to Read',
  },
  {
    id: 'read',
    title: 'Read',
  },
]

const ListBooks = ({ booksOnShelf, onSelect }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        {shelfs.map((shelfData) => (
          <BookShelf
            key={shelfData.id}
            title={shelfData.title}
            books={booksOnShelf.filter(({ shelf }) => (shelf === shelfData.id))}
            onSelect={onSelect}
          />
        ))}
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
