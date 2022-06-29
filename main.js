const form = document.querySelector("form");
const addBookBtn = document.querySelector(".add-book");
const close = document.querySelector(".close");
const submit = document.querySelector(".submit");
const books = document.querySelector(".wrapper-grid");
const remove = document.querySelectorAll(".remove")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = Date.now();
    // this.id = Math.floor(Math.random() * 1000000);
  }

  let myLibrary = [];

  close.addEventListener("click", () => {
    form.style.display = "none";
  });

  addBookBtn.addEventListener("click", () => {
    form.style.display = "block";
  });

  document.addEventListener("DOMContentLoaded", () => {
    submit.addEventListener("click", addBookToLibrary);
  });



  const addBookToLibrary = (e) => {
    e.preventDefault();
    let book = {
      id: Date.now(),
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      pages: document.getElementById("pages").value,
      read: document.getElementById("read").checked,
    };
    myLibrary.push(book);
    form.style.display = "none";
    form.reset();
    console.log(myLibrary)
    display();
  }

  function display() {
    books.textContent = '';
    myLibrary.forEach((book) => {
        function createBookElement(el, name, content) {
            const elem = document.createElement(el);
            div.appendChild(elem);
            elem.textContent = name;
            const elem2 = document.createElement(el);
            elem2.textContent = content;
            div.appendChild(elem2);
            }
            
        const div = document.createElement("div");
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
        });
        const remove = document.createElement("button");
        remove.textContent = "remove";
        remove.classList.add("remove");
        div.appendChild(remove);
        // remove.dataset.linkedArray = index;
        // index++;
        remove.addEventListener("click", removeBook);
        function removeBook() {
            // let getBookToRemove = remove.dataset.linkedArray;
            // myLibrary.splice(parseInt(getBookToRemove), 1);
            // div.remove();
            // display();
            console.log('2')
          }
  })}