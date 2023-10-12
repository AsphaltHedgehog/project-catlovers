import populateByCategories from './categoriesSelect'

async function onCatSelectBtn(click, fetchCategory) {
  if (click.target.nodeName !== 'BUTTON') {
    return;
  };
  const privActiveBtn = document.querySelector('.categories-active');
  privActiveBtn.classList.remove('categories-active');
  click.target.classList.add('categories-active');
  try {
    console.log(click.srcElement.id);
    fetchCategory.category = click.srcElement.id;
    console.log(fetchCategory.category);
    await populateByCategories(fetchCategory);
  } catch (error) {
    console.log(error);
  }
  // Возвращает название категории для феча
};


export default onCatSelectBtn;