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
    formTitle = document.getElementById('bookName').value;
    formAuthor = document.getElementById('bookAuthor').value;
    formPages = document.getElementById('bookPages').value;
    if (formTitle.length == 0 || formAuthor.length == 0 || formPages.length == 0) {
        alert("Please fill in all fields before submitting");
        return;
    }
    collectFormValues();
    createCard();
    console.log(tempRead);
    console.log(document.getElementById('bookReadRadioBtn').checked);
});

function collectFormValues (){
    
    formTitle = document.getElementById('bookName').value;
    formAuthor = document.getElementById('bookAuthor').value;
    formPages = document.getElementById('bookPages').value;
    formRead = document.getElementById('bookReadRadioBtn').checked;

    tempTitle = formTitle;
    formTitle = "";
    document.getElementById('bookName').value = "";

    tempAuthor = formAuthor;
    formAuthor = "";
    document.getElementById('bookAuthor').value = "";

    tempPages = formPages;
    formPages = 0;
    formPages = document.getElementById('bookPages').value = null;

    if (formRead) {
        tempRead = true;
    } else {
        tempRead = false;
    }
}

function addBookToLibrary () {
    myLibrary.push(new Book(newTitle, newAuthor, newPages, newRead));
}


const library = document.querySelector('.library');

function createCard () {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = tempTitle;
    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = tempAuthor;
    const length = document.createElement("p");
    length.classList.add("length");
    length.textContent = tempPages + " pages";
    const read = document.createElement("div");
    read.classList.add("read");

    /* We need to generate a random six digit integer for creating unique radio button IDs,
       otherwise all radio buttons of every card will be linked */
    let tempID = Math.random().toString().substring(2, 8);

    const firstRadioBtn = document.createElement('input');
    firstRadioBtn.setAttribute('type', 'radio');
    firstRadioBtn.id = ('bookRead' + tempID);
    firstRadioBtn.setAttribute('value', 'readBook');
    

    /* We need to use the tempID attribute for setting the 'name' attribute to also 
       differentiate our radio button sets */
    firstRadioBtn.setAttribute('name', ('bookName' + tempID));
    const firstLabel = document.createElement('label');
    firstLabel.setAttribute('for', ('bookRead' + tempID));
    firstLabel.textContent = "Read";

    const secondRadioBtn = document.createElement('input');
    secondRadioBtn.setAttribute('type', 'radio');
    secondRadioBtn.id = ('bookNotRead' + tempID);
    secondRadioBtn.setAttribute('value', 'notRead');
    secondRadioBtn.setAttribute('name', ('bookName' + tempID));
    
    const secondLabel = document.createElement('label');
    secondLabel.setAttribute('for', ('bookNotRead' + tempID));
    secondLabel.textContent = "Not Read";

    if (tempRead == true) {
        firstRadioBtn.setAttribute('checked', true);
    } else {
        secondRadioBtn.setAttribute('checked', true);
    }
     
    library.appendChild(newCard);
    read.append(firstRadioBtn, firstLabel, secondRadioBtn, secondLabel);
    newCard.append(title, author, length, read);

}

function openForm () {
    document.getElementById('bookForm').style.display = 'block';
}

myLibrary.push(new Book("The Lord of the Rings", "JRR Tolkein", 1178, true));
myLibrary.push(new Book("The Hobbit", "JRR Tolkein", 239, true));