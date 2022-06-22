const wrapper_grid = document.querySelector(".wrapper-grid");
const form = document.querySelector("form");
// const title = document.getElementById("title");
// const author = document.getElementById("author");
// const pages = document.getElementById("pages");
const button = document.querySelector("button");
const close = document.querySelector(".close");

close.addEventListener("click", () => {
  form.style.display = "none";
});

button.addEventListener("click", () => {
  form.style.display = "block";
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  saveAndRenderBooks();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  let newBook = {};
  for (let [name, value] of data) {
    if (name === "read") {
      newBook["read"] = true;
    } else {
      newBook[name] = value || "";
    }
  }

  if (!newBook["read"]) {
    newBook["read"] = false;
  }
  addBookToLibrary(
    newBook["title"],
    newBook["author"],
    newBook["pages"],
    newBook["read"]
  );
  form.reset();
  form.style.display = 'none';
});

let myLibrary = [
  //     {
  //     title: 'Book1',
  //     author: 'me',
  //     pages: 500
  // }, {
  //     title: 'Book2',
  //     author: 'you',
  //     pages: 200
  // }
];

function addLocalStorage() {
  // localStorage => save things in key value pairs - key = library : myLibrary
  myLibrary = JSON.parse(localStorage.getItem("library")) || [];
  saveAndRenderBooks();
}

function createBookElement(el, content, className) {
  const element = document.createElement(el);
  element.textContent = content;
  element.setAttribute("class", className);
  return element;
}

function createReadElement(bookItem, book) {
  const read = document.createElement("div");
  read.setAttribute("class", "book-read");
  read.appendChild(createBookElement("h1", "Read?", "book-read-title"));
  let input = document.createElement("input");
  input.type = "checkbox";
  input.addEventListener("click", (e) => {
    if (e.target.checked) {
      bookItem.setAttribute("class", "container read-checked");
      book.read = true;
      renderAndSave();
    } else {
      bookItem.setAttribute("class", "container read-unchecked");
      book.read = false;
      renderAndSave();
    }
  });
  if (book.read) {
    input.checked = true;
    bookItem.setAttribute("class", "container read-checked");
  }
  read.appendChild(input);
  return read;
}

function createBookItem(book, index) {
  const bookItem = document.createElement("div");
  bookItem.setAttribute("id", index);
  bookItem.setAttribute("key", index);
  bookItem.setAttribute("class", "container");
  bookItem.appendChild(createBookElement("h1", `Title:${book.title}`, "title"));
  bookItem.appendChild(
    createBookElement("h1", `Author:${book.author}`, "author")
  );
  bookItem.appendChild(createBookElement("h1", `Pages:${book.pages}`, "pages"));
  bookItem.appendChild(createReadElement(bookItem, book));
  wrapper_grid.insertAdjacentElement("afterbegin", bookItem);
  // return false;
}

function renderBooks() {
  myLibrary.map((book, index) => {
    createBookItem(book, index);
  });
  // return false;
}

function saveAndRenderBooks() {
  localStorage.setItem("library", JSON.stringify(myLibrary));
  renderBooks();
}

//render on page load
addLocalStorage();

//   localStorage.clear();

// function Book(title, author, pages) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     // this.isRead = isRead
// }

// function intakeFormData() {
//     let title = document.getElementById("title").value;
//     let author = document.getElementById("author").value;
//     let pages = document.getElementById("pages").value;
//     addBookToLibrary(title, author, pages);

// }

// function addBookToLibrary(title, author, pages) {
//     let book = new Book(title, author, pages)
//     myLibrary.push(book);
//     display();
// }

// function display() {
//     myLibrary.forEach(element => {
//         const div = document.createElement('div');
//         wrapper_grid.appendChild(div);
//         for (let key in myLibrary) {
//             console.log(`${key}: ${myLibrary[key]}`);
//             const para = document.createElement('p');
//             para.textContent = (`${key}: ${myLibrary[key]}`);
//             div.appendChild(para);

//         }
//     });

//     form.reset();
//     console.log(myLibrary);
// }
