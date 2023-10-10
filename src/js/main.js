import { BookShelf } from './booksApi.js';

const bookShelf = new BookShelf();
const book = {};
const bookListEl = document.querySelector('.books-content');

bookShelf
  .topBooks(book)
  .then(topBooks => {
    const markup = bookTemplate(threeGenrs(topBooks.data));
    bookListEl.insertAdjacentHTML('beforeend', markup);
  })
  .catch(err => {
    console.log(err);
  });

function threeGenrs(arr) {
  const geners = [];
  for (let index = 0; index <= 3; index += 1) {
    geners.push(arr[index]);
  }
  return geners;
}

function bookTemplate(bookList) {
  return `<li class="card book-item" data-id='${bookList[0].books[0]._id}'>
    <p class="main-categories">'${bookList[0].books[0].list_name}'</p>
     <a href='${bookList[0].books[0].book_image}' class="card-link js-card-link">
      <img src='${bookList[0].books[0].book_image}'
        loading='lazy'
        width='335'
        height='485'
      />
    </a>
    <p class="main-title">'${bookList[0].books[0].title}'</p>
    <p class="main-autor">'${bookList[0].books[0].author}'</p>
</li>
 <button type="button" class="main-btn">see more</button>
   `;
}

function renderBooks(books) {
  const markup = books.map(bookTemplate).join('');
  bookListEl.insertAdjacentHTML = markup;
}
// const bookApi = new BookShelf();
// export async function renderSectionBooksGenre(genreName, categoryName) {
//   document.querySelector('.books-content').innerHTML = '';
//   const backEndData = await bookApi.getCategory(genreName);

//   const markup = booksGenreCreateMarkup(categoryName, backEndData);
//   document.querySelector('.books-content').innerHTML = markup;
// }

// function booksGenreCreateMarkup(genreName, backEndBookList) {
//   const genreNameByWord = genreName.split(' ');
//   const genreNameFirstWords = genreNameByWord
//     .slice(0, genreNameByWord.length - 1)
//     .join(' ');
//   const genreNameLastWords = genreNameByWord
//     .slice(genreNameByWord.length - 1)
//     .join(' ');

//   let markup = '';
//   markup += `
//     <h1 class="books-genre-title">${genreNameFirstWords}&nbsp;<span class="books-genre-title-attribute">${genreNameLastWords}</span></h1>
//     <ul class="books-genre-card-container">
//   ;
//   markup += backEndBookList.map(booksGenreCreateOneCard).join('');
//   markup +=
//     </ul>`;
//   return markup;
// }

// function booksGenreCreateOneCard(backEndBookList) {
//   return `
//       <li class="books-genre-item">
//           <div class="books-card" data-action="quick-view" data-id="${backEndBookList._id}">
//             <img class="books-card-title-img" src="${backEndBookList.book_image}" alt="${backEndBookList.title}" loading="lazy">
//             <div class="quick-view">QUICK VIEW</div>
//           </div>
//           <div class="books-card-info">
//             <h3 class="books-card-title">${backEndBookList.title}</h3>
//             <p class="books-card-autor">${backEndBookList.author}</p>
//           </div>
//       </li>`;
// }
// function addUserClickListener() {
//   const categoryEls = document.querySelectorAll('.books-genre-card-container');
//   categoryEls.forEach(categoryEl => {
//     categoryEl.addEventListener('click', onUserClick);
//   });
// }

// function onUserClick(event) {
//   if (event.target.parentNode.dataset.action === 'quick-view') {
//     const bookID = event.target.parentNode.dataset.id;
//     openModalBookDetails(bookID);
//   }
// }
// // booksGenreCreateMarkup();
// booksGenreCreateOneCard();
// console.log(1);
