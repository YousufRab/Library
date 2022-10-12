let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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

const library = document.getElementsByClassName('library');

function createCard () {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    const title = document.createElement("p");
    title.class = "title";
    const author = document.createElement("p");
    author.class = "author";
    const length = document.createElement("p");
    length.class = "length";
    const read = document.createElement("div");
    read.class = "read";
}