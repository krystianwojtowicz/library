const form = document.querySelector("form");
const addBookBtn = document.querySelector(".add-book");
const submit = document.querySelector(".submit");
const books = document.querySelector(".wrapper-grid");
const close = document.querySelector(".close");
const remove = document.querySelector(".remove");

let myLibrary = [];

addBookBtn.addEventListener("click", () => {
  form.style.display = "block";
});

close.addEventListener("click", () => {
  form.style.display = "none";
});

const addBookToLibrary = (e, index) => {
  e.preventDefault();
  let book = {
    id: Date.now(),
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    pages: document.getElementById("pages").value,
    read: document.getElementById("read").value,
  };
  myLibrary.push(book);
  display();
}

document.addEventListener("DOMContentLoaded", () => {
  submit.addEventListener("click", addBookToLibrary);
});

const div = document.createElement("div");

function createBookElement(el, name, content) {
const elem = document.createElement(el);
div.appendChild(elem);
elem.textContent = name;
const elem2 = document.createElement(el);
elem2.textContent = content;
div.appendChild(elem2);
}

function display() {
  let index = 0;
  myLibrary.forEach((book) => {
    div.classList.add("container");
    books.appendChild(div);

    createBookElement('h4', 'title:', `${book.title}`);
    createBookElement('h4', 'author:', `${book.author}`);
    createBookElement('h4', 'pages:', `${book.pages}`);

    const checkbox = document.createElement("button");
    if (book.read) {
      checkbox.textContent = 'read';
    } else {
      checkbox.textContent = 'not read';
    }
    div.appendChild(checkbox);

    checkbox.addEventListener('click', () => {
      if (book.read) {
        book.read = false;
        checkbox.textContent = 'not read';
      } else {
        book.read = true;
        checkbox.textContent = 'read';
      }
    })
    
    const remove = document.createElement("button");
    remove.textContent = "remove";
    remove.classList.add("remove");
    div.appendChild(remove);
    remove.dataset.linkedArray = index;
    index++;

    remove.addEventListener("click", removeBook);

    function removeBook() {
      let getBookToRemove = remove.dataset.linkedArray;
      myLibrary.splice(parseInt(getBookToRemove), 1);
      div.remove();
      display();
    }
  });
  form.style.display = "none";
  form.reset();
}
