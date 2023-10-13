import { FetchBooks } from './booksApi.js';
import renderBookCards from './renderBookCards.js';

const bookShelf = new FetchBooks;

async function fetchBook() {
  try {
    const response = await bookShelf.fetchTopBooks();
    renderBookCards(response.data)
  } catch (error) {
    console.error(error);
    // need notiflix or placeholder for errors
  };
};

fetchBook()

export default fetchBook;
