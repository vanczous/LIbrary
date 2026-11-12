const myLibrary = [];

function Book(title, author, pages) {

  this.title = title;
  this.author = author;
  this.pages = pages;

}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}


///////////////HTML////////////

const bookForm = document.getElementById('bookForm');
const buttonNew = document.getElementById('addNewBook')


buttonNew.addEventListener("click", () => {
  buttonNew.classList.toggle('hidden')
  bookForm.classList.replace('hidden', 'bookForms');
})