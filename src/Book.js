import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ data, onSelect }) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: (
            data.imageLinks && data.imageLinks.smallThumbnail ? (
              `url(${data.imageLinks.smallThumbnail})`) : ('')
          )
        }}/>
      <div className="book-shelf-changer">
        <select
          value={data.shelf || 'none'}
          onChange={(event) => (onSelect(data, event.target.value))}>
          <option value="title" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{data.title}</div>
    <div className="book-authors">{data.authors && data.authors.join(', ')}</div>
  </div>
);

Book.propTypes = {
  data: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Book
