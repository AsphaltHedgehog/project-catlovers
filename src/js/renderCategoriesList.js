const genresListWrapper = document.querySelector('.categories-select-wrapper')


function populateGenresList(array) {
  // main ul
  const ul = document.createElement('ul');
  ul.classList.add('categories-list');
  // no filtering btn
  const allCat = document.createElement('li');
  const allCatBtn = document.createElement('button');
  allCatBtn.classList.add('categories-active', 'categories-list-el');
  allCatBtn.textContent = 'All categories';
  allCat.appendChild(allCatBtn)
  ul.appendChild(allCat);
  // select genres btn's
  array.forEach((el, i) => {
    const listOfItems = document.createElement('li');
    const item = document.createElement('button');
    item.setAttribute('type', 'button');
    item.setAttribute('id', `${array[i].list_name}`);
    item.classList.add('categories-list-el');
    item.textContent = `${el.list_name}`;
    listOfItems.appendChild(item);
    ul.appendChild(listOfItems);
  })
  // populating ul with btn's
  genresListWrapper.appendChild(ul);
};


export default populateGenresList

