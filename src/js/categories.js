import { FetchBooks } from './booksApi'
import populateGenresList from './renderCategoriesList'
import onCatSelectBtn from './categoriesSelectBtn'

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

const log = wrapper.addEventListener('click', ev => onCatSelectBtn(ev))

// не забудь проверить что придйдёт от функции ОнКатСелектБТН




