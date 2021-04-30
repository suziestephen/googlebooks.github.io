import axios from "axios";

export default {
  getBook: function (query) {
      //Adding in API call to Google Books
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id)
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData)
  },
  // Get the saved a books from the database
  savedBooks: function () {
    return axios.get("/api/books")
  }
};