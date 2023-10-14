import renderCard from './mainCardRender.js';
//

async function renderCards(data) {
  // best seller books title
  // const bookShelf = document.querySelector('.books-content');
  // bookShelf.innerHTML = '<ul class="top-books"></ul>';

  const box = document.querySelector('.top-books');
  box.innerHTML =
    '<li><h2 class="main-title">Best Sellers<span class="color-accent"> Books</span></h2></li>';

  // ебучие циклы
  // const fragment = document.createDocumentFragment();
  try {
    if (window.screen.width < 767.8) {
      for (let i = 0; i < 4; i += 1) {
        const length = 1;
        const { books, list_name } = data[i];
        const cards = renderCard(books, length);
        const completeCardsSection = renderCardsWrapper(cards, list_name);
        box.insertAdjacentHTML('beforeend', completeCardsSection);
      }
    } else if (window.screen.width > 767.8 && window.screen.width < 1439.98) {
      for (let i = 0; i < 4; i += 1) {
        const length = 3;
        const { books, list_name } = data[i];
        const cards = renderCard(books, length);
        const completeCardsSection = renderCardsWrapper(cards, list_name);
        box.insertAdjacentHTML('beforeend', completeCardsSection);
      }
    } else if (window.screen.width >= 1440) {
      for (let i = 0; i < 4; i += 1) {
        const length = 5;
        const { books, list_name } = data[i];
        const cards = renderCard(books, length);
        const completeCardsSection = renderCardsWrapper(cards, list_name);
        box.insertAdjacentHTML('beforeend', completeCardsSection);
      }
    } else {
      // console.log('nepravilno');
      console.error('ops... something went wrong, contact us via email');
      // notify
    }
  } catch (error) {
    console.log(error);
    // не забудь нотификс
  }
  // const topCat = document.
}

function renderCardsWrapper(cards, list_name) {
  const markup = `
  <li class="top-books-containers ">
  <h3 class="item-category">${list_name}</h3>
  <ul class="box-category">
  ${cards}
  </ul>
  <button type="button" data-cat-name='${list_name}' aria-label="Show more" class="see-more">See more</button>
  </li>
  `;

  return markup;
}

export default renderCards;
