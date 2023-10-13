import { FetchBooks } from './booksApi';
const fetchBooks = new FetchBooks;
console.log('1');

function getBooksFromLocalStorage() {
  const BOOKS_STORAGE = 'books';
  const storedBooks = JSON.parse(localStorage.getItem(BOOKS_STORAGE)) ?? [];
  return storedBooks;
}

function displayBooksInShoppingList() {
  console.log('1');
  const shoppingListContainer = document.querySelector('.shop-list');

  const booksData = getBooksFromLocalStorage(); 
  
  if (!booksData.length > 0) {
    shoppingListContainer.innerHTML = '<p>This page is empty, add some books and proceed to order.</p>';
    return;
  } 
    // shoppingListContainer.innerHTML = '';
    // booksData.forEach((book._id) => {
    //   const bookCard = createBookCard(book);
    //   shoppingListContainer.appendChild(bookCard);
    // });
    booksData.forEach((el, index) => { 
      fetchBooks.bookId = el;
      const bookInfo = fetchBooks.fetchBookId();
      
    });
}

displayBooksInShoppingList(); 



// export { renderBookInfo };

// function renderBookShoppingList(book_id) {`
//   <div class="modal book-card__modal scrollable">
//     <button class="">
//         <img src=${new URL(
//         '../images/modal-pop/icon-x-close.svg',
//         import.meta.url
//       )} alt="close_icon" width="24" height="24"/>
//     </button>
//     <div class="book-card">
//       <div class="book-card__thumb">
//         <img class="book-card__img" src="${
//           book.book_image
//         }" alt="book_image" loading="lazy" />
//       </div>
//       <div class="book-info">
//         <h2 class="book-title">${book.title}</h2>
//         <h3 class="book-author">${book.author}</h3>
//         <p class="book-description">${book.description}</p>
//         <ul class="shops-list list">
//           <li class="shops-item">
//             <a
//               class="buy-links"
//               href="${book.amazon_link}"
//               aria-label="amazon-shop icon"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 class="amazon-shop__icon book-shop__icons"
//                 src="${new URL(
//                   '../images/modal-pop/amazon-link_2x.png',
//                   import.meta.url
//                 )}"
//                 alt="amazon-shop icon"
//                 loading="lazy"
//               />
//             </a>
//           </li>
//           <li class="shops-item">
//             <a
//               class="buy-links"
//               href="${book.apple_link}"
//               aria-label="apple-book icon"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 class="apple-book__icon book-shop__icons"
//                 src="${new URL(
//                   '../images/modal-pop/book-link_2x.png',
//                   import.meta.url
//                 )}"
//                 alt="apple-book icon"
//                 loading="lazy"
//               />
//             </a>
//           </li>
         
//         </ul>
//       </div>
      
//     </div>
//     <div class="book-card__btn">${card__btn}</div>`};
