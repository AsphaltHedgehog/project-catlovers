import { FetchBooks } from './booksApi.js'
import populateGenresList from './categoriesRenderList.js'
import onCatSelectBtn from './categoriesSelectBtn.js'

// ========================================================

const wrapper = document.querySelector('.categories-select-wrapper')

// ========================================================

const fetchCategory = new FetchBooks

async function categoriesList() {
  try {
    const response = await fetchCategory.fetchCategoryList();
    await populateGenresList(response.data);
  } catch (error) {
    console.error(error);
    // need notiflix or placeholder for errors
  }
}

categoriesList()

wrapper.addEventListener('click', ev => onCatSelectBtn(ev, fetchCategory))

// не забудь проверить что придйдёт от функции ОнКатСелектБТН




