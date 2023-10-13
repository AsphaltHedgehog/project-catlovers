import { FetchBooks } from './booksApi';

// ===============================================================

const fetchBooks = new FetchBooks();

// ===============================================================

const shoppingListContainer = document.querySelector('.shop-list');

let booksArr = '';

// =================================================================

function getBooksFromLocalStorage() {
  const BOOKS_STORAGE = 'books';
  storedBooks = JSON.parse(localStorage.getItem(BOOKS_STORAGE)) ?? [];
};

getBooksFromLocalStorage();

// ====================================================================

function renderSavedBooks({
  _id, book_image, title, list_name, description, author,buy_links
}) {
  booksArr = `
  <li class="shopplist-item" data-idcard="${_id}">
        <button type="button" class="delate-btn" data-id="${_id}">
          <svg class="delate-svg" width="16" height="16">
          </svg>
        </button>
        <img class="img-shoplist-card" src="${book_image}" alt="${title}" width="100" height="142" loading="lazy"/>
        <div class="card-shopplist">
          <h2 class="card-title-shoplist">${title}</h2>
          <p class="card-category-shoplist">${list_name}</p>
          <p class="card-description-shoplist">${description}</p>
          <div class="wrapper-card-shoplist-footer">
            <p class="card-author-shoplist">${author}</p>
            <ul class="shops-list">
            <li class="shops-item">
            <a
              class="buy-links"
              href="${buy_links[0].url}"
              aria-label="amazon-shop icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="amazon-shop__icon book-shop__icons"
                src="${new URL(
                  '../images/modal-pop/amazon-link_2x.png',
                  import.meta.url
                )}"
                alt="amazon-shop icon"
                loading="lazy"
              />
            </a>
            </li>
            <li class="shops-item">
            <a
              class="buy-links"
              href="${buy_links[1].url}"
              aria-label="amazon-shop icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="amazon-shop__icon book-shop__icons"
                src="${new URL(
                  '../images/modal-pop/book-link_2x.png',
                  import.meta.url
                )}"
                alt="amazon-shop icon"
                loading="lazy"
              />
            </a>
            </li>
            </ul>
          </div>
        </div>
      </li>
  `
};



// ====================================================================


async function bookRender(markup) {
  shoppingListContainer.innerHTML = markup;
}


// ====================================================================

async function displayBooksInShoppingList(storedBooks) {
  if (!storedBooks.length > 0) {
    shoppingListContainer.innerHTML = `<li><p class="text-empty-shop-list">This page is empty, add some books and proceed to order.</p></li><li><img src=${new URL("../images/shop-list/empty-shop-list-bgr.png", import.meta.url)} width="265"
      height="198" alt="falling books"/></li>`;
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!СКАЧАЙ КНИГУ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return;
  };

  const renderedBooks = []

  for (const el of storedBooks) {
    fetchBooks.bookId = el._id;
    
    const data = await fetchBooks.fetchBookId().then(result => result.data);

    renderSavedBooks(data);
    renderedBooks.push(booksArr);
  }

  await bookRender(renderedBooks.join(''));

  // storedBooks.forEach(async el => {
  //   fetchBooks.bookId = el._id;
    
  //   const data = await fetchBooks.fetchBookId().then(result => result.data);

  //   renderSavedBooks(data)
    
  // });

  // await bookRender(booksArr);
};



displayBooksInShoppingList(storedBooks); 
