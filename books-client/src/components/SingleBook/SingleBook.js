import React, { Component } from 'react'

class SingleBook extends Component {
  constructor(props) {
    super(props);
    // this.state = { books: []}

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
    return (
<div>
  This is A book
</div>
    )

  }
}
export default SingleBook;
