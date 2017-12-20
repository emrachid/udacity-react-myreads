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
          backgroundImage: `url(${data.image})`
        }}/>
      <div className="book-shelf-changer">
        <select
          value={data.status}
          onChange={(event) => (onSelect(data, event.target.value))}>
          <option value="none" disabled>Move to...</option>
          <option value="reading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{data.title}</div>
    <div className="book-authors">{data.authors}</div>
  </div>
);

Book.propTypes = {
  data: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Book
