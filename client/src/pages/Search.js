import React from "react";
import API from "../utils/API";
import Form from "../components/Form/Form";
import Results from "../components/Results/results";

class Search extends React.Component {
  state = {
      value: "",
      books: []
  };

  componentDidMount() {
      //primary function for search
      this.searchBook();
  }

  //creates book data
  makeBook = bookData => {
      return {
          _id: bookData.id,
          title: bookData.volumeInfo.title,
          authors: bookData.volumeInfo.authors,
          description: bookData.volumeInfo.description,
          image: bookData.volumeInfo.imageLinks.thumbnail,
          link: bookData.volumeInfo.previewLink
      }
  }

  //search function to change state of books to the book data from makeBook
  searchBook = query => {
      API.getBook(query)
          .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
          .catch(err => console.error(err));
  };

  //actions for search text
  handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
          [name]: value
      });
  };

  //actions for submit button
  handleFormSubmit = event => {
      event.preventDefault();
      this.searchBook(this.state.search);
  };

  //render using search function and then input change and form submit
  render() {
      return (
          <div>
              <Form
                  search={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
              />
              <div className="container">
                  <h2>Results</h2>
                  <Results books={this.state.books} />
              </div>
          </div>
      )
  }
}

//results component displays books 

export default Search;