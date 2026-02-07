
const addBtn = document.querySelector(".plus-btn");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("form");

closeBtn.addEventListener("click", hideModal);
addBtn.addEventListener("click", openModal);
form.addEventListener("submit", formDatas);

var modal = document.getElementById("modal");
var content = document.getElementById("content");
var opacity = document.getElementById("opacity");


function hideModal() {
   modal.style.display = "none";
   opacity.style.display = "none";
}

function openModal() {
    modal.style.display = "inline-block";
    opacity.style.display = "inline-block"
    console.log("looo");
}


const myLibrary = [] //array


function Books(book, author, page, status) {
    this.book = book
    this.author = author
    this.page = page
    this.status = status
    this.ID =  uuidv4() 
    this.sayname = function() {
        console.log(this.ID)
    }
}


function formDatas(e) {
   e.preventDefault();
  let book = document.getElementById("title").value
  let authors = document.getElementById("author").value
  let pages = document.getElementById("pages").value
  let status = document.getElementById("status").value

  addBookToLibrary(book, authors, pages, status);

   modal.style.display = "none";
   opacity.style.display = "none";
}
//add books to library
function addBookToLibrary(book, authors, pages, status) {
    const addBook = new Books(book, authors, pages, status);
    addBook.sayname();

    myLibrary.push(addBook);
}


function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}






