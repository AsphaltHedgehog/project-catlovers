import populateByCategories from './categoriesSelect';
import fetchBook from './main';

async function onCatSelectBtn(click, fetchCategory) {
  if (click.target.nodeName !== 'BUTTON') {
    return;
  };
  try {
    if (click.target.id === 'All categories') {
      fetchBook();
      const privActiveBtn = document.querySelector('.categories-active');
      privActiveBtn.classList.remove('categories-active');
      click.target.classList.add('categories-active');
      return;
    };
  } catch (error) {
    console.log(error);
  }
  const privActiveBtn = document.querySelector('.categories-active');
  privActiveBtn.classList.remove('categories-active');
  click.target.classList.add('categories-active');
  try {
    // console.log(click.srcElement.id);
    fetchCategory.category = click.srcElement.id;
    // console.log(fetchCategory.category);
    await populateByCategories(fetchCategory);
  } catch (error) {
    console.log(error);
  };
};

// const all = document.querySelector('#All categories')

// all.addEventListener('click', () =>  fetchBooks())








export default onCatSelectBtn;