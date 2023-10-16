import { FetchBooks } from './booksApi';

// ===============================================================

const fetchBooks = new FetchBooks();

// ===============================================================

const shoppingListContainer = document.querySelector('.shop-list');

const title = document.querySelector('.shop-title');

let booksArr = '';

let storedBooks = [];

// =================================================================

function getBooksFromLocalStorage() {
  const BOOKS_STORAGE = 'books';
  storedBooks = JSON.parse(localStorage.getItem(BOOKS_STORAGE)) ?? [];
}

getBooksFromLocalStorage();




// ====================================================================

function renderSavedBooks({
  _id,
  book_image,
  title,
  list_name,
  description,
  author,
  buy_links,
}) {
  booksArr = `
  <li class="shop-item" data-idcard="${_id}">
        <button type="button" class="delate-btn" data-id="${_id}">
          
        </button>
        <img class="img-shop-list" src="${book_image}" alt="${title}" width="100" height="145" loading="lazy"/>
        <div class="card-shopplist">
          <h2 class="card-title-shoplist">${title}</h2>
          <p class="card-category-shoplist">${list_name}</p>
          <p class="card-description-shoplist">${description}</p>
          <div class="wrapper-card-shoplist">
            <p class="card-author-shoplist">${author}</p>
            <ul class="shop-list-card">
            <li class="shops-item">
            <a
              class="buy-links"
              href="${buy_links[0].url}"
              aria-label="amazon-shop icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                // class="amazon-shop-icon-shoplist"
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
                class="apple-book-shoplist "
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
  `;
}

// ====================================================================

async function bookRender(markup) {
  if (!storedBooks.length > 0) { 
    lastBookCheck(shoppingListContainer)
    return;
  }
  shoppingListContainer.innerHTML = markup;
}

// ====================================================================
// 1
// async function displayBooksInShoppingList(storedBooks) {
//   if (!storedBooks.length > 0) {
//     shoppingListContainer.innerHTML = `<li><p class="text-empty-shop-list">This page is empty, add some books and proceed to order.</p></li><li><img src=${new URL("../images/shop-list/empty-shop-list-bgr.png", import.meta.url)} width="265"
//       height="198" alt="falling books"/></li>`;
//     // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!СКАЧАЙ КНИГУ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     return;
//   };

//   const renderedBooks = []

//   for (const el of storedBooks) {
//     fetchBooks.bookId = el._id;
    
//     const data = await fetchBooks.fetchBookId().then(result => result.data);


// 2
// async function displayBooksInShoppingList(storedBooks) {
//   if (!storedBooks.length > 0) {
//     lastBookCheck(shoppingListContainer);
//     return;
//     }
//   const renderedBooks = [];

//   for (const el of storedBooks) {
//     fetchBooks.bookId = el._id;

//     const data = await fetchBooks.fetchBookId().then(result => result.data);

//     renderSavedBooks(data);
//     renderedBooks.push(booksArr);
//   }
// await bookRender(renderedBooks.join(''));
// }



export function lastBookCheck(container) {
    title.classList.add('shop-list-empty')
    container.innerHTML = `<li><p class="text-empty-shop-list">This page is empty, add some books and proceed to order.</p></li><li><img src=${new URL(
      '../images/shop-list/empty-shop-list-bgr.png',
      import.meta.url
    )} width="265"
      height="198" alt="falling books"/></li>`;
    return;
};

displayBooksInShoppingList(storedBooks);


// displayBooksInShoppingList(storedBooks);

//     renderSavedBooks(data);
//     renderedBooks.push(booksArr);
//   }

//   await bookRender(renderedBooks.join(''));

//   storedBooks.forEach(async el => {
//     fetchBooks.bookId = el._id;
    
//     const data = await fetchBooks.fetchBookId().then(result => result.data);

//     renderSavedBooks(data)
    
//   });

//   await bookRender(booksArr);
// };

// displayBooksInShoppingList(storedBooks); 


const booksPerPage = 4;
let currentPage = 1;
let startIndex = 0;
let endIndex = booksPerPage;

function updatePaginationButtons() {
  const pageButtons = document.querySelectorAll('.pagination-button');

  pageButtons.forEach((button) => {
    button.classList.remove('active');
  });

  document.getElementById(`page${currentPage}`).classList.add('active');
}


document.getElementById('firstPage').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage = 1;
    updatePaginationButtons();
    displayBooksInShoppingList(storedBooks, currentPage);
  }
});

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updatePaginationButtons(); 
    displayBooksInShoppingList(storedBooks, currentPage);
  }
});

document.getElementById('page1').addEventListener('click', () => {
  
  document.getElementById('page1').classList.add('active');
  document.getElementById('page2').classList.remove('active');
  document.getElementById('page3').classList.remove('active');
  
  currentPage = 1;
  displayBooksInShoppingList(storedBooks, currentPage);
});

document.getElementById('page2').addEventListener('click', () => {
  
  document.getElementById('page1').classList.remove('active');
  document.getElementById('page2').classList.add('active');
  document.getElementById('page3').classList.remove('active');
  
  currentPage = 2;
  displayBooksInShoppingList(storedBooks, currentPage);
});

document.getElementById('page3').addEventListener('click', () => {
  document.getElementById('page1').classList.remove('active');
  document.getElementById('page2').classList.remove('active');
  document.getElementById('page3').classList.add('active');
  
  currentPage = 3;
  displayBooksInShoppingList(storedBooks, currentPage);
});

document.getElementById('nextPage').addEventListener('click', () => {
  if (endIndex < storedBooks.length) {
    currentPage += 1;
    updatePaginationButtons();
    displayBooksInShoppingList(storedBooks, currentPage);
  }
});

document.getElementById('lastPage').addEventListener('click', () => {
  const totalPages = Math.ceil(storedBooks.length / booksPerPage);
  if (currentPage < totalPages) {
    currentPage = totalPages;
    updatePaginationButtons();
    displayBooksInShoppingList(storedBooks, currentPage);
  }
});


async function displayBooksInShoppingList(storedBooks, page = 1) {
  if (!storedBooks.length) {
    shoppingListContainer.innerHTML = `<li><p class="text-empty-shop-list">This page is empty, add some books and proceed to order.</p></li><li><img src=${new URL("../images/shop-list/empty-shop-list-bgr.png", import.meta.url)} width="265" height="198" alt="падаючі книги"/></li>`;
    updatePaginationVisibility();
    return;
  }

  startIndex = (page - 1) * booksPerPage;
  endIndex = startIndex + booksPerPage;

  const renderedBooks = [];

  for (let i = startIndex; i < endIndex && i < storedBooks.length; i += 1) {
    const el = storedBooks[i];
    fetchBooks.bookId = el._id;
    const data = await fetchBooks.fetchBookId().then((result) => result.data);
    renderSavedBooks(data);
    renderedBooks.push(booksArr);
  }

  await bookRender(renderedBooks.join(''));

  currentPage = page; 
  updatePaginationButtons();
}

function updatePaginationVisibility() {
  const pagination = document.querySelector('.pagination');
  if (storedBooks.length > 4) {
    pagination.style.display = 'block';
  } else {
    pagination.style.display = 'none';
  }
}

displayBooksInShoppingList(storedBooks);


