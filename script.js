const addBookBtn = document.querySelector(".add-book");
const inputContainer = document.querySelector(".form-container");
const container = document.querySelector(".container");
const submitBtn = document.querySelector(".submit-btn");
const authorEl = document.querySelector("#author");
const titleEl = document.querySelector("#title");
const pagesEl = document.querySelector("#pages");
const isReadEl = document.querySelector("#read");
const booksContainer = document.querySelector(".books-container");

let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function displayBooks() {
  booksContainer.textContent = "";

  myLibrary.forEach((book, index) => {
    const bookContainer = document.createElement("div");
    bookContainer.className = "book";
    bookContainer.setAttribute("index", `${index}`);

    const bookFrame = document.createElement("div");
    bookFrame.className = "book-frame";
    const closeIcon = document.createElement("span");
    closeIcon.classList.add("material-icons");
    closeIcon.classList.add("md-36");
    closeIcon.textContent = "close";
    const authorText = document.createElement("p");
    authorText.textContent = `Author: ${book.author}`;
    const titleText = document.createElement("p");
    titleText.textContent = `Title: ${book.title}`;
    const pagesText = document.createElement("p");
    pagesText.textContent = `Pages: ${book.pages}`;

    const toggle = document.createElement("div");
    toggle.className = "toggle";
    const text = document.createElement("p");
    text.textContent = "Read?";
    const labelSwitch = document.createElement("label");
    labelSwitch.className = "switch";
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");

    if (book.read === true) {
      input.setAttribute("checked", "checked");
    }

    const slider = document.createElement("span");
    slider.className = "slider";

    labelSwitch.append(input, slider);
    toggle.append(text, labelSwitch);
    bookFrame.append(closeIcon, authorText, titleText, pagesText, toggle);
    bookContainer.appendChild(bookFrame);
    booksContainer.appendChild(bookContainer);
  });
}

function displayInputForm() {
  inputContainer.style.display = "flex";
  container.style.opacity = 0.33;
}

function addBookToLibrary(e) {
  e.preventDefault();
  const author = authorEl.value;
  const title = titleEl.value;
  const pages = pagesEl.value;
  const read = isReadEl.checked ? true : false;

  const book = new Book(author, title, pages, read);
  myLibrary.push(book);

  inputContainer.style.display = "none";
  container.style.opacity = 1;
  clearInput();
  displayBooks();
}


// Deletes a specific book
function deleteBook(target) {
  if (target.classList.contains("material-icons")) {
    const index = target.parentElement.parentElement.getAttribute("index");
    myLibrary.splice(index, 1);
  }

  displayBooks();
}

function clearInput() {
  authorEl.value = "";
  titleEl.value = "";
  pagesEl.value = "";
  isReadEl.checked = false;
}

// Event listeners
addBookBtn.addEventListener("click", displayInputForm);
inputContainer.addEventListener("submit", (e) => addBookToLibrary(e));
booksContainer.addEventListener("click", (e) => deleteBook(e.target));
