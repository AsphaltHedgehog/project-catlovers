const genresListWrapper = document.querySelector('.categories-select-wrapper')


export function populateGenresList(array) {
  // main ul
  const ul = document.createElement('ul');
  ul.classList.add('categories-list')
  // no filtering btn
  const noFilerBtn = document.createElement('li');
  noFilerBtn.classList.add('categories-active', 'categories-list-el');
  noFilerBtn.textContent = 'All categories'
  ul.appendChild(noFilerBtn);
  // select genres btn's
  array.forEach((el, i) => {
    const listOfItems = document.createElement('li');
    const item = document.createElement('button');
    item.setAttribute('type', 'button')
    item.classList.add('categories-list-el');
    item.textContent = `${el.list_name}`;
    listOfItems.appendChild(item);
    ul.appendChild(listOfItems)
  })
  // populating ul with btn's
  genresListWrapper.appendChild(ul)
};

