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
}