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
              books={books.filter(({ status }) => (status === 'reading'))}
              onSelect={this.props.onSelect}
            />
            <BookShelf
              title="Want to Read"
              books={books.filter(({ status }) => (status === 'wantToRead'))}
              onSelect={this.props.onSelect}
            />
            <BookShelf
              title="Read"
              books={books.filter(({ status }) => (status === 'read'))}
              onSelect={this.props.onSelect}
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
