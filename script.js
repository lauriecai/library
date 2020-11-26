// -----SELECTORS & VARIABLES-----
let myLibrary = [];
const cardGroup = document.querySelector('.card-group');
const cards = document.getElementsByClassName('card');
const title = document.getElementsByClassName('title');
const author = document.getElementsByClassName('author');
const pages = document.getElementsByClassName('pages');
const addBookBtns = document.querySelectorAll('.add-btn');
const modal = document.querySelector('.dark-overlay');
const modalTitle = document.querySelector('.titleInput');
const modalAuthor = document.querySelector('.authorInput');
const modalPages = document.querySelector('.pagesInput');
const modalCancel = document.querySelector('.cancel-btn');
const modalAdd = document.querySelector('.add-confirm-btn');

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

// collect book info
function addBook() {
    // create card
    createCard();
    // create new bookvar: let 'book' + `${myLibrary.length}`
    let bookvar = 'book' + `${myLibrary.length}`;
    bookvar = new book(`${modalTitle.value}`, `${modalAuthor.value}`, `${modalPages.value}`);
    // add new book to array
    myLibrary.push(bookvar);
    // generate updated library
    generateLibrary();
    // close modal
    hide('.dark-overlay');
    hide('.null-state')
    // reset values
    modalTitle.value = '';
    modalAuthor.value = '';
    modalPages.value = ''
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
function populateBookInfo(book) {
    title[book].textContent = myLibrary[book].title;
    author[book].textContent = myLibrary[book].author;
    pages[book].textContent = myLibrary[book].pages;
}

// toggle off
function hide(classname) {
    document.querySelector(classname).style.display = 'none';
}

// toggle on
function show(classname) {
    document.querySelector(classname).style.display = 'inline-block';
}

// generate library
function generateLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
        populateBookInfo(i);
        show('.button-top-right');
    }
}

// -----FLOW-----
// add event listeners to all add book buttons
for (i = 0; i < addBookBtns.length; i++) {
    addBookBtns[i].addEventListener('click', function() {
        modal.style.display = 'block';
        modalTitle.focus();
    })
}

// modal > user clicks 'cancel'
modalCancel.addEventListener('click', function() {
    hide('.dark-overlay');
})

// modal > user clicks 'add book'
modalAdd.addEventListener('click', function() {
    addBook();
})
