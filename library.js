let myLibrary = [];

// Temporary variables for collecting form data
let formTitle = "";
let formAuthor = "";
let formPages = 0;
let formRead = false;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const formSubBtn = document.querySelector('#formSub');
formSubBtn.addEventListener('click', () => {

})

function collectFormValues (){
    formTitle = document.getElementById('bookName').value;
    formAuthor = document.getElementById('bookAuthor').value;
    formPages = document.getElementById('bookPages').value;
    if (document.getElementById('bookRead').checked == true) {
        formRead = true;
    }
}

function addBookToLibrary () {
    let newTitle = prompt("What is the book's title?");
    let newAuthor = prompt("Who is the author?");
    let newPages = prompt("How many pages is the book? If you are unsure type 0.")
    let newRead = prompt("Have you read this book? Type 'yes'/'y' to confirm, otherwise type 'no/n'.")
    if (newRead.toLowerCase() === 'yes' || newRead.toLowerCase() === 'y') {
        newRead = true;
    } else { 
        newRead = false;
    }
    myLibrary.push(new Book(newTitle, newAuthor, newPages, newRead));
}

myLibrary.push(new Book("The Lord of the Rings", "JRR Tolkein", 1178, true));
myLibrary.push(new Book("The Hobbit", "JRR Tolkein", 239, true));

const library = document.querySelector('.library');

function createCard () {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    const title = document.createElement("p");
    title.classList.add("title");
    const author = document.createElement("p");
    author.classList.add("author");
    const length = document.createElement("p");
    length.classList.add("length");
    const read = document.createElement("div");
    read.classList.add("read");

    library.appendChild(newCard);
    newCard.append(title, author, length, read);
}

function createRadioButton (){
    const firstRadioBtn = document.createElement('input');
    firstRadioBtn.setAttribute('type', 'radio');
    firstRadioBtn.id = 'bookRead';
    firstRadioBtn.setAttribute('value', 'readBook');
    firstRadioBtn.setAttribute()
}

function openForm () {
    document.getElementById('bookForm').style.display = 'block';
}