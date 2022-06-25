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
const close = document.querySelector('.close');

let myLibrary = [{
  title: 'hobbit',
  author: 'me',
  pages: '2',
  read: true
},
{
  title: 'hobbit2',
  author: 'you',
  pages: '3',
  read: false
}];

addBookBtn.addEventListener("click", () => {
  form.style.display = "block";
});

close.addEventListener("click", () => {
  form.style.display = "none";
});

const addBookToLibrary = (e) => {
  e.preventDefault();
  let book = {
    id: Date.now(),
    title: document.getElementById("title").value,
    pages: document.getElementById("pages").value,
    read: document.getElementById('read').value
  };
  myLibrary.push(book);
  document.forms[0].reset();
  const div = document.createElement("div");
  div.classList.add("container");
  books.appendChild(div);
  const divtitle = document.createElement("div");
  div.appendChild(divtitle);
  divtitle.textContent = book.title;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  div.appendChild(checkbox);
  checkbox.checked = book.read; 
  form.style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
  submit.addEventListener("click", addBookToLibrary);
});

const display = myLibrary.forEach(book => {
  const div = document.createElement("div");
  div.classList.add("container");
  books.appendChild(div);
  const divtitle = document.createElement("div");
  div.appendChild(divtitle);
  divtitle.textContent = book.title;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  div.appendChild(checkbox);
  checkbox.checked = book.read;
});

