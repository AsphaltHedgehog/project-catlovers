
const wrapper = document.querySelector('.shop-list');

wrapper.addEventListener('click', deleteBook)

function deleteBook(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return
    };

    // && e.target.nodeName !== 'IMG'
    const liEl = e.target.parentElement.parentElement;
    
    liEl.classList.add('deleted-book')
    

   
    const id = e.target.dataset.id;
    const books = JSON.parse(localStorage.getItem('books'));
   

    for (let i = 0; i < books.length; i += 1) {
      
       
       if (books[i]._id === id) {
           
          
           
           books.splice(i, 1);
           localStorage.setItem('books', JSON.stringify(books))
           break;
       }
    
   }
}