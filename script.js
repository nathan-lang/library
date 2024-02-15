let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let book2 = new Book("Sample", "J.R.R. Tolkien", 295, true);
let book3 = new Book("Book", "J.R.R. Tolkien", 295, false);
let book4 = new Book("Movie", "J.R.R. Tolkien", 295, false);
let book5 = new Book("Hello World", "J.R.R. Tolkien", 295, false);
let book6 = new Book("Test", "J.R.R. Tolkien", 295, false);

let myLibrary = [book1, book2, book3, book4, book5, book6];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function removeBook() {}

function renderBooks() {
  const bookList = document.querySelector(".book-list");
  bookList.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = document.createElement("div");
    book.style.background = "#f0f7d7";
    book.style.border = "1px solid #ebebeb";
    book.style.boxShadow = "3px 3px #e0dede";
    book.style.borderRadius = "10px";
    book.style.overflow = "scroll";
    book.style.textAlign = "center";
    let bookTitle = document.createElement("h4");
    bookTitle.textContent = myLibrary[i].title;
    let bookAuthor = document.createElement("h5");
    bookAuthor.textContent = "By: " + myLibrary[i].author;
    let bookPages = document.createElement("h6");
    bookPages.textContent = "Pages: " + myLibrary[i].pages;
    let bookRead = document.createElement("h6");
    let status = "Not Read";
    if (myLibrary[i].isRead) {
      status = "Read";
    }
    bookRead.textContent = status;
    let readButton = document.createElement("button");
    readButton.textContent = "Read/Unread";
    readButton.style.marginTop = "5px";
    readButton.style.border = "none";
    readButton.style.color = "white";
    readButton.style.background = "#759920";
    readButton.style.borderRadius = "10px";
    readButton.addEventListener("click", function () {
      if (myLibrary[i].isRead) {
        myLibrary[i].isRead = false;
      } else {
        myLibrary[i].isRead = true;
      }
      renderBooks();
    });
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.style.border = "none";
    removeButton.style.color = "white";
    removeButton.style.background = "#759920";
    removeButton.style.borderRadius = "10px";
    removeButton.style.padding = "0px 23px 0px 23px";
    removeButton.style.marginTop = "5px";
    removeButton.addEventListener("click", function () {
      myLibrary.splice(i, 1);
      renderBooks();
    });
    book.append(bookTitle);
    book.append(bookAuthor);
    book.append(bookPages);
    book.append(bookRead);
    book.append(readButton);
    book.append(removeButton);
    bookList.appendChild(book);
  }
  document.body.appendChild(bookList);
}

renderBooks();

const bookForm = document.querySelector(".add-book");
document.body.appendChild(bookForm);

function addBook() {
  console.log("Called!");
  const title = document.querySelector("#book-title");
  const author = document.querySelector("#book-author");
  const pages = document.querySelector("#book-pages");
  const read = document.querySelector("#book-read");
  let isRead = false;
  console.log(read.value);
  // Setting a boolean to true if you entered Yes for reading the book.
  if (read.value === "yes") {
    isRead = true;
  }
  // Checking if your fields are empty.
  if (title.value === "" || author.value === "" || pages.value === "") {
    alert("One of your fields are empty. Please fill them out.");
    return;
  }
  let newBook = new Book(
    title.value,
    author.value,
    parseInt(pages.value),
    isRead
  );
  console.log(newBook);
  if (myLibrary.length < 20) {
    console.log("Added!");
    myLibrary.push(newBook);
  } else {
    alert("You cannot add more than 20 books.");
  }
  renderBooks();
}
