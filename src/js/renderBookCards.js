import renderCard from './mainCardRender.js'
// 

async function renderCards(data) {
  // best seller books title
  const box = document.querySelector('.books-content');
  box.insertAdjacentHTML("afterbegin",
    '<h2 class="main-title">Best Sellers<span class="color-accent">Books</span></h2>'
  )
  // ебучие циклы
  const fragment = document.createDocumentFragment()
  try {
    if (window.screen.width < 767.8) {
      for (let i = 0; i < 4; i += 1) {
        const length = 1;
        const { books, list_name } = data[i];
        const result = renderCard(books, length);
        box.insertAdjacentHTML('beforeend', result)
  }
    } else if (window.screen.width > 768 || window.screen.width < 1439.8) {
      for (let i = 0; i < 4; i += 1) {
        const length = 3;
        const { books, list_name } = data[i];
        const result = renderCard(books, length);
        box.insertAdjacentHTML('beforeend', result)
  }
    } else if (window.screen.width > 1439.8){
      for (let i = 0; i < 4; i += 1) {
        const length = 4;
        const { books, list_name } = data[i];
        const result = renderCard(books, length);
        box.insertAdjacentHTML('beforeend', result)
  }
    } else {
      console.log('nepravilno');
      // notify
    }
  } catch (error) {
    console.log(error);
    // не забудь нотификс
  }
  // const topCat = document.

}

function renderCatTitle(title) {
  
}








export default renderCards