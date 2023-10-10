import { FetchBooks } from './booksApi'
import {populateGenresList} from './renderCategoriesList'

// ========================================================

const log = new FetchBooks

const categoriesList = log.fetchCategoryList().then(response => 
  populateGenresList(response.data));




