function cardRender(books, length) {
  let markup = '';
  const asdasdad = document.querySelector('.top-books')
  console.log(length);
  for (let i = 0; i < length; i += 1) {
    const { _id,book_image ,title, author } = books[i];
    
    markup += `
      <li class="item-category-book js-book-modal" data-book-id="${_id}">
        <a class="link-books-render" href="#">  
      <div class="card-book">
            <div class="img-card-book">
            <img src="${book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${author}</p>
                  </div>
                </div>
          </div>
        </a>
          </li>
  `
  };
  return markup;
}


// console.log(markup);
// console.log(div);


export default cardRender;