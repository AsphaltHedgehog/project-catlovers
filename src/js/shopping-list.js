import { FetchBooks } from './booksApi';
const fetchBooks = new FetchBooks();
let booksArr = [];
const shoppingListContainer = document.querySelector('.shop-list');

function getBooksFromLocalStorage() {
  console.log(1);
  const BOOKS_STORAGE = 'books';
  const storedBooks = JSON.parse(localStorage.getItem(BOOKS_STORAGE)) ?? [];
  return storedBooks;
}

function displayBooksInShoppingList(ids) {
    console.log(2);
  // const booksData = getBooksFromLocalStorage(); 

  if (!ids.length > 0) {
    console.log('Empty');
    shoppingListContainer.innerHTML = '<p>This page is empty, add some books and proceed to order.</p>';
    return;
  } 
    // shoppingListContainer.innerHTML = '';
    // booksData.forEach((book._id) => {
    //   const bookCard = createBookCard(book);
    //   shoppingListContainer.appendChild(bookCard);
    // });
    // booksData.forEach((el, index) => { 
    //   fetchBooks.bookId = el._id;
    //   const bookInfo = fetchBooks.fetchBookId().then(result => { return result.author });

    //   console.log(resultBookInfo);

    // });
      ids.forEach(id => {
      fetchBooks.bookId = id._id;
      const data = fetchBooks.fetchBookId();
      data.then(el => booksArr.push(el.data));
      console.log(booksArr);
    });
    }

displayBooksInShoppingList(getBooksFromLocalStorage()); 



// const markUp = shopListRenderBooks(booksArr);
// function shopListRenderBooks(booksArr) {


  const renderBooks = booksArr => { 
    console.log(3);
  const markUp = booksArr.map(book => {

      console.log(book);
      if (window.matchMedia('(max-width: 376px)').matches) {
        console.log(book);
        return `<li><div class="shoplist-book-card" id=${book._id}>
        <button type="button" class="shoplist-delete-book-btn">
        <img src="" class="shoplist-delete-book-icon" alt="Delete book" width="15" height="15" />
        </button>
        <div class="shoplist-book-card-top">
        <div><img class="shoplist-book-cover" src=${
          book.book_image
        } alt="book cover" width=${book.book_image_width} height=${
          book.book_image_height
        }/>
        <p class="shoplist-book-author">${book.author}</p></div>
        <div><p class="shoplist-book-title">${book.title}</p>
        <p class="shoplist-book-category">${book.list_name}</p>
        <div class="shops-logo"><a href=${
          book.buy_links[0].url
        } class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Amazon">
        <img src="" class="shop-logo amazon" width="48" height="15" alt="Amazon" />
        </a>
        <a href=${
          book.buy_links[1].url
        } class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Apple Books">
        <img src="" class="shop-logo apple-books" width="28" height="27" alt="Apple Books" />
        </a>
        <a href=${
          book.buy_links[4].url
        } class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Book Shop">
        <img src="" class="shop-logo book-shop" width="32" height="30" alt="Book Shop" />
        </a></div></div></div>
        <p class="shoplist-book-description">${book.description}</p>
      </div></li>`;
      } else {
        console.log(book);
        return `<li><div class="shoplist-book-card" id=${book._id}>
        <button type="button" class="shoplist-delete-book-btn">
          <img src="" class="shoplist-delete-book-icon" alt="Delete book" width="14" height="14" />
        </button>
        <div><img class="shoplist-book-cover" src=${
          book.book_image
        } alt="book cover" width=${book.book_image_width} height=${
          book.book_image_height
        }/></div>
        <div><p class="shoplist-book-title">${book.title}</p>
        <p class="shoplist-book-category">${book.list_name}</p>
        <p class="shoplist-book-description">${book.description}</p>
        <p class="shoplist-book-author">${book.author}</p>
        </div>
        <div class="shops-logo"><a href=${
          book.buy_links[0].url
        } class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Amazon">
        <img src="" class="shop-logo amazon" width="48" height="15" alt="Amazon" />
        </a>
        <a href=${
          book.buy_links[1].url
        } class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Apple Books">
        <img src="" class="shop-logo apple-books" width="28" height="27" alt="Apple Books" />
        </a>
        <a href=${
          book.buy_links[4].url
        } class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Book Shop">
        <img src="" class="shop-logo book-shop" width="32" height="30" alt="Book Shop" />
        </a></div>
      </div></li>`;
      }
    })
    .join('');
    // return newArr;
  shopIsEmpty.innerHTML = '';
  bookListEl.innerHTML = markUp;
  sectionTitle.classList.add('title-when-books');
};

console.log(shoppingListContainer);
// console.log(markUp);

shoppingListContainer.insertAdjacentHTML('beforeend', renderBooks);