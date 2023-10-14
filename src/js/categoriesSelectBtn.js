import populateByCategories from './categoriesSelect';
import fetchBook from './main';

async function onCatSelectBtn(click, fetchCategory) {
  const privActiveBtn = document.querySelector('.categories-active');
  if (click.target.nodeName !== 'BUTTON') {
    return;
  };
  try {
    if (click.target.dataset.catName === 'All categories') {
      fetchBook();
      // const privActiveBtn = document.querySelector('.categories-active');
      // privActiveBtn.classList.remove('categories-active');
      // click.target.classList.add('categories-active');
      addActiveStyle(click, privActiveBtn);
      return;
    };
  } catch (error) {
    console.log(error);
  }
  // const privActiveBtn = document.querySelector('.categories-active');
  addActiveStyle(click, privActiveBtn)
  // privActiveBtn.classList.remove('categories-active');
  // click.target.classList.add('categories-active');
  try {
    // console.log(click.srcElement.id);
    fetchCategory.category = click.srcElement.dataset.catName;
    // console.log(fetchCategory.category);
    await populateByCategories(fetchCategory);
  } catch (error) {
    console.log(error);
  };
};

// const all = document.querySelector('#All categories')

// all.addEventListener('click', () =>  fetchBooks())


function addActiveStyle(click, activeBtn) {
  const categoryName = click.srcElement.dataset.catName;

  catSelector = document.querySelectorAll('.categories-list li');
  for (const el of catSelector) {
    const btn = el.querySelector(`button[data-cat-name='${categoryName}']`);
    if (btn) {
      activeBtn.classList.remove('categories-active');
      btn.classList.add('categories-active')
      break;
    }
  }
}





export default onCatSelectBtn;