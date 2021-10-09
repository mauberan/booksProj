import React, { Component } from 'react'

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = { book: [],author: []}

  }
  componentDidMount() {
    let bookId = this.props.match.params.id
    fetch('http://localhost:9001/book/' + bookId).then(result => {
      return result.json()
    }).then((data) => {
      this.setState({book: data})
      fetch('http://localhost:9001/author/' + data.authorId).then(res => {
        return res.json()
      }).then(data => {
        this.setState({...this.state,author: data})
      })
    })

  };

  componentWillUnmount() {

  };

  render() {
    console.log(this.state.book)
    console.log(this.state.author)

    return (
<div>
  <div>
  {this.state.book.bookName}
  </div>
  <div>
    {this.state.book.isbn}
  </div>
  <div>
    {this.state.author.firstName}     {this.state.author.lastName}
  </div>


  <div>
  <a href='/'>Back</a>
  </div>
</div>
    )

  }
}
export default SingleBook;
