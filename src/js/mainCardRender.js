function cardRender(books, length) {
  let markup = '';
  const asdasdad = document.querySelector('.books-content')
  console.log(length);
  for (let i = 0; i < length; i += 1) {
    const { list_name, _id,book_image ,title, author } = books[i];
    
    markup +=`<li>
    <h3 class="item-category">${list_name}</h3>
        <ul class="box-category">
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
    </ul>
        <button type="button" aria-label="Show more" class="see-more">See more</button>
  </li>`;
  };
  return markup;
}


// console.log(markup);
// console.log(div);


export default cardRender