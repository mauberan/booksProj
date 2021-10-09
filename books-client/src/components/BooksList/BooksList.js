import React, { Component } from 'react'


class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: []}

  }
  componentDidMount() {
    fetch('http://localhost:9001/books').then(result => {
        return result.json()
    }).then((data) => {
      this.setState({books: data})
    })

  };

  componentWillUnmount() {

  };

  render() {
    // const listItems = this.state.map((d) => <li key={d.name}>{d.name}</li>);
    console.log(this.state.books)
    return (


      <ul>
        {this.state.books.map(item => (
          <li key={item.bookId}><a href={'/books/' + item.bookId}> {item.bookName}</a></li>
          )
        )}
      </ul>
    )

  }
}
export default BooksList;
