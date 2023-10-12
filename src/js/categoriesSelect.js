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
  console.log(catName);

  const box = document.querySelector('.top-books');
  const fragment = document.createDocumentFragment();
  const title = document.createElement('h2');
  title.classList.add('main-title');
  
  // fragment.insertAdjacentHTML("beforebegin",
  //   '<h2 class="main-title">Best Sellers<span class="color-accent">Books</span></h2>');
  
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