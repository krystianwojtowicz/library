// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }
const form = document.querySelector("form");
const addBookBtn = document.querySelector(".add-book");
const submit = document.querySelector(".submit");
const books = document.querySelector(".wrapper-grid");
const close = document.querySelector(".close");
const remove = document.querySelector(".remove");

let myLibrary = [
  {
    title: "hobbit",
    author: "me",
    pages: "2",
    read: true,
  },
  {
    title: "hobbit2",
    author: "you",
    pages: "3",
    read: false,
  },
];

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
    pages: document.getElementById("pages").value,
    read: document.getElementById("read").value,
  };
  myLibrary.push(book);
  document.forms[0].reset();
  const div = document.createElement("div");
  div.setAttribute("id", index);
  div.classList.add("container");
  books.appendChild(div);
  const divtitle = document.createElement("div");
  div.appendChild(divtitle);
  divtitle.textContent = book.title;
  const checkbox = document.createElement("input");
  checkbox.style.display = "block";
  checkbox.type = "checkbox";
  div.appendChild(checkbox);
  checkbox.checked = book.read;
  form.style.display = "none";
  const remove = document.createElement("button");
  remove.textContent = "remove";
  remove.classList.add("remove");
  div.appendChild(remove);
};

document.addEventListener("DOMContentLoaded", () => {
  submit.addEventListener("click", addBookToLibrary);
});

function display() {
  let index = 0;
  myLibrary.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("container");
    books.appendChild(div);
    const divtitle = document.createElement("div");
    div.appendChild(divtitle);
    divtitle.textContent = book.title;
    const checkbox = document.createElement("input");
    checkbox.style.display = "block";
    checkbox.type = "checkbox";
    div.appendChild(checkbox);
    checkbox.checked = book.read;
    const remove = document.createElement("button");
    remove.textContent = "remove";
    remove.classList.add("remove");
    div.appendChild(remove);
    remove.dataset.linkedArray = index;
    index++;
    console.log(remove.dataset.linkedArray);

    remove.addEventListener("click", removeBook);

    function removeBook() {
      let getBookToRemove = remove.dataset.linkedArray;
      myLibrary.splice(parseInt(getBookToRemove), 1);
      div.remove();
      display();
    }
  });
}
display();

// remove.addEventListener("click", () => {
//   myLibrary = myLibrary.filter(book) =>
//    book.id != id

// });
