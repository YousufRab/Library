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

// Create class myBook
class myBook {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// Constructor for Book objects 
// Not used in this version of library. Class is preferred in this version
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const bookSubForm = document.querySelector('.form');

// Button for opening add book form
const openFormBtn = document.querySelector('.openForm');
openFormBtn.addEventListener('click', function(e) {
    if (bookSubForm.classList.contains("form-active")) {
        //hide
        bookSubForm.classList.remove("form-active");
        bookSubForm.classList.add('form-transition');
        bookSubForm.classList.add('form-hidden');
    } else {
        // show
        bookSubForm.classList.add('form-visible');
        bookSubForm.clientWidth;
        bookSubForm.classList.add('form-transition');
        bookSubForm.classList.add('form-active');
    }
}, false);

bookSubForm.addEventListener('transitionend', function() {
    bookSubForm.classList.remove('form-transition');
    bookSubForm.classList.remove('form-visible');
    bookSubForm.classList.remove('form-hidden');
}, false);

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
    myLibrary.push(new myBook(tempTitle, tempAuthor, tempPages, tempRead));
    createCard();
    if (bookSubForm.classList.contains("form-active")) {
        //hide
        bookSubForm.classList.remove("form-active");
        bookSubForm.classList.add('form-transition');
        bookSubForm.classList.add('form-hidden');
    } else {
        // show
        bookSubForm.classList.add('form-visible');
        bookSubForm.clientWidth;
        bookSubForm.classList.add('form-transition');
        bookSubForm.classList.add('form-active');
    }
});

const deleteBtn = document.getElementById('removeBtn');
deleteBtn.addEventListener('click', (event)=> {
    (event.target.parentElement).remove();
})

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


const library = document.querySelector('.library');

/* Create function to loop through myLibrary array and implement createCard() function on
   array items */

function displayBooks () {
    if (myLibrary.length != 0) {
        for (let i = 0; i < myLibrary.length; i++) {
            const newCard = document.createElement("div");
            newCard.classList.add("card");
            const title = document.createElement("p");
            title.classList.add("title");
            title.textContent = `"` + myLibrary[i].title + `"`;
            const author = document.createElement("p");
            author.classList.add("author");
            author.textContent = myLibrary[i].author;
            const length = document.createElement("p");
            length.classList.add("length");
            length.textContent = myLibrary[i].pages + " pages";
            const read = document.createElement("div");
            read.classList.add("read");
            
            let tempID = Math.random().toString().substring(2, 8);

            const firstRadioBtn = document.createElement('input');
            firstRadioBtn.setAttribute('type', 'radio');
            firstRadioBtn.id = ('bookRead' + tempID);
            firstRadioBtn.setAttribute('value', 'readBook');
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
        
            if (myLibrary[i].read == true) {
                firstRadioBtn.setAttribute('checked', true);
            } else {
                secondRadioBtn.setAttribute('checked', true);
            }
        
            const newDeleteBtn = document.createElement('button');
            newDeleteBtn.setAttribute('type', 'button');
            newDeleteBtn.id = "removeBtn";
            newDeleteBtn.textContent = "Remove";
            newDeleteBtn.classList.add("rmBtn1", "rmBtn2");
            newDeleteBtn.onclick = (event) => {
                (event.target.parentElement).remove();
            }

            library.appendChild(newCard);
            read.append(firstRadioBtn, firstLabel, secondRadioBtn, secondLabel);
            newCard.append(title, author, length, read, newDeleteBtn);

        } 
    }
    return;
}

function createCard () {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = `"` + tempTitle + `"`;
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

    const newDeleteBtn = document.createElement('button');
    newDeleteBtn.setAttribute('type', 'button');
    newDeleteBtn.id = "removeBtn";
    newDeleteBtn.textContent = "Remove";
    newDeleteBtn.classList.add("rmBtn1", "rmBtn2");
    newDeleteBtn.onclick = (event) => {
        (event.target.parentElement).remove();
    }
     
    library.appendChild(newCard);
    read.append(firstRadioBtn, firstLabel, secondRadioBtn, secondLabel);
    newCard.append(title, author, length, read, newDeleteBtn);

}

myLibrary.push(new myBook("The Lord of the Rings", "JRR Tolkein", 1178, true));

// Create event listener for page loading and run displayBooks to display myLibrary objects
console.log(myLibrary)
document.addEventListener("DOMContentLoaded", () => {
    displayBooks();
});
