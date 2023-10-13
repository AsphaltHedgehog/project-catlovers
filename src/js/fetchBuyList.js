import { FetchBooks } from './booksApi';

async function fetchShopList() {
    let booksInShop = JSON.parse(localStorage.getItem('books')) ?? [];
    console.log(booksInShop);
}
