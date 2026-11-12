const myLibrary = [];

function Book(title, author, pages) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = self.crypto.randomUUID()
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages)
    myLibrary.push(book); 
    // take params, create a book then store it in the array
}


///////////////HTML////////////

const bookForm = document.getElementById('bookForm');
const buttonNew = document.getElementById('addNewBook')


buttonNew.addEventListener("click", () => {
  buttonNew.classList.toggle('hidden')
  bookForm.classList.replace('hidden', 'bookForms');
})


bookForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = document.querySelector('input[name="title"]').value;
  const author = document.querySelector('input[name="author"]').value;
  const pages = document.querySelector('input[name=pages]').value;

  const book = addBookToLibrary(title, author, pages)


})

