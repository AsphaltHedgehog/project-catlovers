import renderCard from './mainCardRender.js';
// 

async function renderCards(data) {
  // best seller books title
  const box = document.querySelector('.books-content');
  box.insertAdjacentHTML("beforebegin", '<h2 class= "main-title"> Best Sellers <span span class= "main-header-color"> Books</span ></h2>'
  );
  // ебучие циклы
  const fragment = document.createDocumentFragment();
  try {
    if (window.screen.width < 767.8) {
      for (let i = 0; i < 4; i += 1) {
        const length = 1;
        const { books, list_name } = data[i];
        const cards = renderCard(books, length);
        const completeCardsSection = renderCardsWrapper(cards,list_name);
        box.insertAdjacentHTML('beforeend', completeCardsSection);
      };
    } else if (window.screen.width > 768 && window.screen.width < 1440) {
      for (let i = 0; i < 4; i += 1) {
        const length = 3;
        const { books, list_name } = data[i];
        const cards = renderCard(books, length);
        const completeCardsSection = renderCardsWrapper(cards,list_name);
        box.insertAdjacentHTML('beforeend', completeCardsSection);
      };
    } else if (window.screen.width >= 1440){
      for (let i = 0; i < 4; i += 1) {
        const length = 5;
        const { books, list_name } = data[i];
        const cards = renderCard(books, length);
        const completeCardsSection = renderCardsWrapper(cards,list_name);
        box.insertAdjacentHTML('beforeend', completeCardsSection);
      };
    } else {
      console.log('nepravilno');
      // notify
    };
  } catch (error) {
    console.log(error);
    // не забудь нотификс
  };
  // const topCat = document.
};


function renderCardsWrapper(cards, list_name) {
  const markup = `
  <div>
  <h3 class="item-category">${list_name}</h3>
  <ul class="box-category">
  ${cards}
  </ul>
  <button type="button" aria-label="Show more" class="see-more">See more</button>
  </div>
  `;

  return markup;
};

export default renderCards;