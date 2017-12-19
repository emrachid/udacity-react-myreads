import React from 'react'
import BookShelf from './BookShelf'

class ListBooks extends React.Component {
  render () {
    const books = this.props.books;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              books={books.filter(({ state }) => (state === 'reading'))}
            />
            <BookShelf
              title="Want to Read"
              books={books.filter(({ state }) => (state === 'want-to-read'))}
            />
            <BookShelf
              title="Read"
              books={books.filter(({ state }) => (state === 'read'))}
            />
          </div>
        </div>
        <div className="open-search">
          <a onClick={this.props.onOpenSearch}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBooks
