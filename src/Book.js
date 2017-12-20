import React from 'react'

class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.data.image})`
            }}/>
          <div className="book-shelf-changer">
            <select
              value={this.props.data.status}
              onChange={(event) => (
                this.props.onSelect(this.props.data, event.target.value)
              )}>
              <option value="none" disabled>Move to...</option>
              <option value="reading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.data.title}</div>
        <div className="book-authors">{this.props.data.authors}</div>
      </div>
    )
  }
}

export default Book
