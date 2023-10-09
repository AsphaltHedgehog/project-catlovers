import axios from 'axios';

export class BookShelf {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';
  constructor() {
    this.bookId = 0;
    this.category = '';
  }

  categoryList() {
    return axios
      .get(`${this.#BASE_URL}/category-list`)
      .then(response => response)
      .catch(console.error);
  }

  topBooks() {
    return axios
      .get(`${this.#BASE_URL}/top-books`)
      .then(response => response)
      .catch(console.error);
  }

  bookId() {
    return axios
      .get(`${this.#BASE_URL}${this.bookId}`)
      .then(response => response)
      .catch(console.error);
  }

  categoryOfBooks() {
    return axios
      .get(`${this.#BASE_URL}category?category=${this.category}`)
      .then(response => response)
      .catch(error => console.error(error));
  }
}
