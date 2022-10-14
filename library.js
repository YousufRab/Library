let myLibrary = [];

// Variables for collecting form data
let formTitle = "";
let formAuthor = "";
let formPages = 0;
let formRead = false;

let tempTitle = "";
let tempAuthor = "";
let tempPages = 0;
let tempRead = false;

// Constructor for Book objects 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const formSubBtn = document.querySelector('#formSub');
formSubBtn.addEventListener('click', () => {
    collectFormValues();
})

function collectFormValues (){
    
    formTitle = document.getElementById('bookName').value;
    formAuthor = document.getElementById('bookAuthor').value;
    formPages = document.getElementById('bookPages').value;
    if (formTitle.length == 0 || formAuthor.length == 0 || formPages.length == 0) {
        alert("Please fill in all fields before submitting");
        return;
    }
    tempTitle = formTitle;
    formTitle = "";
    document.getElementById('bookName').value = "";

    tempAuthor = formAuthor;
    formAuthor = "";
    document.getElementById('bookAuthor').value = "";

    tempPages = formPages;
    formPages = 0;
    formPages = document.getElementById('bookPages').value = null;

    if (document.getElementById('bookRead').checked == true) {
        tempRead = true;
        document.getElementById('bookNotRead').checked = true;

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

    const firstRadioBtn = document.createElement('input');
    firstRadioBtn.setAttribute('type', 'radio');
    firstRadioBtn.id = 'bookRead';
    firstRadioBtn.setAttribute('value', 'readBook');
    firstRadioBtn.setAttribute('name', 'bookName');
    const firstLabel = document.createElement('label');
    firstLabel.setAttribute('for', 'bookRead');
    firstLabel.textContent = "Read";

    const secondRadioBtn = document.createElement('input');
    secondRadioBtn.setAttribute('type', 'radio');
    secondRadioBtn.id = 'bookNotRead';
    secondRadioBtn.setAttribute('value', 'notRead');
    secondRadioBtn.setAttribute('name', 'bookName');
    secondRadioBtn.setAttribute('checked', true);
    const secondLabel = document.createElement('label');
    secondLabel.setAttribute('for', 'bookNotRead');
    secondLabel.textContent = "Not Read";

    library.appendChild(newCard);
    read.append(firstRadioBtn, firstLabel, secondRadioBtn, secondLabel);
    newCard.append(title, author, length, read);

}

function openForm () {
    document.getElementById('bookForm').style.display = 'block';
}