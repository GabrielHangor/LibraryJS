const addBookBtn = document.querySelector(".add-book");
const inputContainer = document.querySelector(".form-container");
const container = document.querySelector(".container");
const submitBtn = document.querySelector(".submit-btn");
const authorEl = document.querySelector("#author");
const titleEl = document.querySelector("#title");
const pagesEl = document.querySelector("#pages");
const isReadEl = document.querySelector("#read");

let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function displayInputForm() {
  inputContainer.style.display = "flex";
  container.style.opacity = 0.33;
}

function createBook() {
  inputContainer.style.display = "none";
  container.style.opacity = 1;
  e.preventDefault();

  const author = authorEl.value;
  const title = titleEl.value;
  const pages = pagesEl.value;
  const read = isReadEl.checked ? true : false;

  const book = new Book(author, title, pages, read);
  myLibrary.push(book);

  console.log(myLibrary);
}

// Event listeners
addBookBtn.addEventListener("click", displayInputForm);
submitBtn.addEventListener("submit", (e) => createBook(e));
