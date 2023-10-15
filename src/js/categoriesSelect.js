import cardRender from './mainCardRender.js';

async function populateByCategories(fetchCategory) {
  const categories = fetchCategory.category;
  try {
    const response = await fetchCategory.fetchCategoryOfBooks().then(
      response => response.data
    );
    if (response.length < 1) {
      // return МЕСТО ДЛЯ НОТИФИКСА!!!!
    };
    const cards = cardRender(response, response.length);

    await renderMain(categories, cards);
  } catch (error) {
    console.log(error);
  };
};

function renderMain(cat, cards) {
  const catName = findLastWord(cat);
  const box = document.querySelector('.books-content');
  const title = `<li><h2 class="main-title">${catName.string} <span class="color-accent">${catName.lastWord}</span></h2></li>`
  // const title = document.createElement('h2');
  // title.classList.add('main-title');
  // title.insertAdjacentHTML('beforeend',
  //   ``
  // );
  const top = document.querySelector('.top-books');
  top.innerHTML= `${title}<div class="cat-books-container">${cards}</div>`;
  // box.innerHTML = `${title} <ul class="top-books">${cards}</ul>`;
  // .innerHTML(cards);
  // console.log(fragment);
  // box.innerHTML(fragment);
};


function findLastWord(cat) {
  const words = cat.split(' ');
  if (words.length > 1) {
    const lastWord = words.pop();
    const string = words.join(' ');

    return {
      string: string,
      lastWord: lastWord,
    };
  } else {
    // Место под нотифликс!!!!!!!!!!!!!!!!!!!
    return console.log(error);
  };
}


export default populateByCategories;