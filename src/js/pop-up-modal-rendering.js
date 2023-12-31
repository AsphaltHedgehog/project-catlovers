import { FetchBooks } from './booksApi';
export { renderBookInfo };

function renderBookInfo(book, inShoppingList) {
  const card__btn = inShoppingList
    ? '<button class="card__btn add-card__bnt btn">remove from shop list</button> <p class = "congrat-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.!</p>'
    : '<button class="card__btn add-card__bnt btn">add to shop list</button> <p class = "congrat-text"></p>';
  return `<div class="backdrop backdrop__modal js-book-modal">
  <div class="modal book-card__modal scrollable">

    <button class="modal-close__btn js-book-close">
           <img class="close__icon"src=${new URL(
        '../images/modal-pop/icon-x-close.svg',
        import.meta.url
      )} alt="close_icon" />
    </button>
    <div class="book-card">
      <div class="book-card__thumb">
        <img class="book-card__img" src="${
          book.book_image
        }" alt="book_image" loading="lazy" />
      </div>
      <div class="book-info">
        <h2 class="book-title">${book.title}</h2>
        <h3 class="book-author">${book.author}</h3>
        <p class="book-description">${book.description}</p>
        <ul class="shops-list list">
          <li class="shops-item">
            <a
              class="buy-links"
              href="${book.amazon_link}"
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
              href="${book.apple_link}"
              aria-label="apple-book icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="apple-book__icon book-shop__icons"
                src="${new URL(
                  '../images/modal-pop/book-link_2x.png',
                  import.meta.url
                )}"
                alt="apple-book icon"
                loading="lazy"
              />
            </a>
          </li>
         
        </ul>
      </div>
      
    </div>
    <div class="book-card__btn">${card__btn}</div>`;
}