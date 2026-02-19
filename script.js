
const addBtn = document.querySelector(".plus-btn");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("myForm");
const deleteBtn = document.querySelector("delete");
const progressBtn = document.querySelector("progress")

var modal = document.getElementById("modal");
var content = document.getElementById("content");
var opacity = document.getElementById("opacity");


closeBtn.addEventListener("click", hideModal);
addBtn.addEventListener("click", openModal);
form.addEventListener("submit", formDatas);


function hideModal() {
   modal.style.display = "none";
   opacity.style.display = "none";
   form.reset();
}

function openModal() {
    modal.style.display = "inline-block";
    opacity.style.display = "inline-block"
    
}

const myLibrary = []


function Books(book, author, page, status) {
    this.book = book
    this.author = author
    this.page = page
    this.status = status
    this.bookID =  uuidv4() 
    this.sayBook = function() { 
    }
}


function formDatas(e) {
   e.preventDefault();
  let book = document.getElementById("title").value
  let author = document.getElementById("author").value
  let page = document.getElementById("pages").value
  let status = document.getElementById("status").value

   if (book ==="" ||author ==="" || page ==="" ) {
    alert ("Input cannot be blank.");
    throw "error"}

  addBookToLibrary(book, author, page, status);
  form.reset();
   hideModal();
}


function addBookToLibrary(book, author, page, status) {
    const addBook = new Books(book, author, page, status);
    addBook.sayBook();
    myLibrary.push(addBook);
    displayBook(); 
}


function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}


 function displayBook() {

  document.getElementById("content").innerHTML = "";
    for(let i=0; i<myLibrary.length; i++){

            let card = document.createElement("div");
            card.classList.add("cards");
            card.id = myLibrary[i].bookID;
            card.classList.add(`${myLibrary.bookid}`)

            // Title
            let title = document.createElement("p");
            title.classList.add("title");
            title.textContent = myLibrary[i].book;
            card.appendChild(title);

            // Author
            let author = document.createElement("p");
            author.textContent = myLibrary[i].author;
            card.appendChild(author);

            // Pages
            let page = document.createElement("p");
            page.textContent = myLibrary[i].page +" " + "Pages";
            card.appendChild(page);

            // Button container
            let btnContainer = document.createElement("div");
            btnContainer.classList.add("content-btns");

            // Read button
            let progressBtn = document.createElement("button");
            progressBtn.classList.add("progress");
            btnContainer.appendChild(progressBtn);
            
            if(myLibrary[i].status ==="Read") {
              progressBtn.textContent = "Read"
            } else if (myLibrary[i].status ==="Not Read") {
              progressBtn.textContent = "Not Read"
            }

            progressBtn.addEventListener("click", () => {
             if (progressBtn.textContent === "Read") {
            progressBtn.textContent = "Not Read";
            } else if (progressBtn.textContent === "Not Read") {
             progressBtn.textContent = "Read";
               }
            });

            // Delete button
            let deleteBtn = document.createElement("button");
            deleteBtn.classList.add("deleteBtn");
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = removeBook;
            btnContainer.appendChild(deleteBtn);


            // Append button container to card
            card.appendChild(btnContainer);

            // Append card to content
            document.getElementById("content").appendChild(card);

    }};


const bookid = 0

function removeBook() {
    const bookid = this.parentElement.parentElement.classList;

    const findBook = myLibrary.findIndex(
      (element) => element.bookid === bookid
    );
    const delBook = myLibrary.splice(findBook, 1);
    this.parentElement.parentElement.remove()
    
}


