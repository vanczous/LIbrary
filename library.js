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

function ShowTable(){

  const data = myLibrary;

    let html = `
    <table border="1" style="border-collapse: collapse; margin: 15px;">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Pages</th>
      </tr>
    </thead>
    <tbody>
    `;

    data.forEach(item => {
      html += `
        <tr>
          <td>${item.title}</td>
          <td>${item.author}</td>
          <td>${item.pages}</td>
        </tr>
      `
    })

    html += `</tbody></table>`

    document.getElementById("table-container").innerHTML = html
}


///////////////HTML////////////

const bookForm = document.getElementById('bookForms');
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

  try{
  const book = addBookToLibrary(title, author, pages)
  
  }catch(e){
    console.log(e)
    return;
  }

  console.log(myLibrary)
})

const seeLibraryButton = document.getElementById('seeLibrary');
seeLibraryButton.addEventListener("click", () => {
  bookForm.classList.toggle('bookForms', 'hidden')
})








