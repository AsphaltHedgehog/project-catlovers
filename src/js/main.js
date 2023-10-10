import { BookShelf } from './bookApi.js';

const bookShelf = new BookShelf();
bookShelf.bookId = '642fd89ac8cf5ee957f12361';
const bookListEl = document.querySelector('.gallery');

bookShelf
  .topBooks(bookShelf.topBooks)
  .then(topBooks => {
    console.log(topBooks.data);
    const markup = bookTemplate(topBooks);
    bookListEl.insertAdjacentHTML('beforeend', markup);
  })
  .catch(err => {
    console.log(err);
  });

function bookTemplate({ author, book_image, _id, title, list_name }) {
  return `<li class="card book-item" data-id='${_id}'>
    <p class="main-categories">'${list_name}'</p>
     <a href='${book_image}' class="card-link js-card-link">
      <img
        loading='lazy'
        width='335'
        height='485'
      />
    </a>
    <p class="main-title">'${title}'</p>
    <p class="main-autor">'${author}'</p>
</li>
 <button type="button" class="main-btn">see more</button>
   `;
}

function renderBooks(books) {
  const markup = books.map(bookTemplate).join('');
  bookListEl.insertAdjacentHTML = markup;
}
