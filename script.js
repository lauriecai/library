// -----SELECTORS & VARIABLES-----
let myLibrary = [];
const cardGroup = document.querySelector('.card-group');
const cards = document.getElementsByClassName('card');
const title = document.getElementsByClassName('title');
const author = document.getElementsByClassName('author');
const pages = document.getElementsByClassName('pages');

// -----OBJECTS-----
// test books
const book0 = new book('The Life-Changing Magic of Tidying Up', 'Marie Kondo', '226 Pages');
const book1 = new book('Harry Potter and the Chamber of Secrets','J.K. Rowling', '341 Pages')
myLibrary.push(book0, book1);

// -----FUNCTIONS-----
// object constructor
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read) {
            return (`${title} by ${author}, ${pages} pages, already read`);
        } else {
            // it's best to return things rather than putting console.log() directly into the function!
            return (`${title} by ${author}, ${pages} pages, not read yet`);
        }
    }
}

// create card
function createCard() {
    // card background
    const card = document.createElement('div');
    card.classList.add('card');
    cardGroup.appendChild(card);
    // add title section
    const title = document.createElement('p');
    title.classList.add('title');
    card.appendChild(title);
    // add author section
    const author = document.createElement('p');
    author.classList.add('author');
    card.appendChild(author);
    // add pages section
    const pages = document.createElement('p');
    pages.classList.add('pages');
    card.appendChild(pages);
}

// display book info
function displayBookInfo(book) {
    title[book].textContent = myLibrary[book].title;
    author[book].textContent = myLibrary[book].author;
    pages[book].textContent = myLibrary[book].pages;
}

// -----FLOW-----

for (i = 0; i < myLibrary.length; i++) {
    createCard();
    displayBookInfo(i);
}























//     for (i = 0; i < myLibrary.length; i++) {
//         // create 'card' div
//         createCard();
//         // create 'title', 'author', and 'page-count' children elements
//         populateCard();

//         // assign title, author, and page count
//         document.querySelector('.title').textContent = myLibrary[i].title;
//         document.querySelector('.author').textContent = myLibrary[i].author;
//         document.querySelector('.page-count').textContent = myLibrary[i].pages;
//     }