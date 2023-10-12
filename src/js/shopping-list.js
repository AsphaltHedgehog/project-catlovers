import { FetchBooks } from './booksApi'; 

function getBooksFromLocalStorage() {
  const BOOKS_STORAGE = 'books';
  const storedBooks = JSON.parse(localStorage.getItem(BOOKS_STORAGE)) || [];
  return storedBooks;
}

function displayBooksInShoppingList() {
  const shoppingListContainer = document.getElementById('book-container');
  const booksData = getBooksFromLocalStorage(); 
  
  if (booksData.length === 0) {
    shoppingListContainer.innerHTML = '<p>Your Shopping List is empty.</p>';
  } else {
    shoppingListContainer.innerHTML = '';
    booksData.forEach((book) => {
      const bookCard = createBookCard(book);
      shoppingListContainer.appendChild(bookCard);
    });
  }
}

displayBooksInShoppingList(); 