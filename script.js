// -----SELECTORS & VARIABLES-----
let myLibrary = [];
let data = 0;
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
const nullState = document.querySelector('.null-state');

// -----FUNCTIONS-----
// object constructor
function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        if (read) {
            return (`${title} by ${author}, ${pages} pages`);
        } else {
            // it's best to return things rather than putting console.log() directly into the function!
            return (`${title} by ${author}, ${pages} pages`);
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
    modalPages.value = '';
}

// generate library
function generateLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
        displayBookInfo(i);
    }
    show('.button-top-right');
}

// display book info
function displayBookInfo(book) {
    title[book].textContent = myLibrary[book].title;
    author[book].textContent = myLibrary[book].author;
    pages[book].textContent = myLibrary[book].pages + ' Pages';
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
    // add footer div
    const footer = document.createElement('div');
    footer.classList.add('book-footer');
    card.appendChild(footer);
    // add pages within footer
    const pages = document.createElement('p');
    pages.classList.add('pages');
    footer.appendChild(pages);
    // add remove within footer
    const remove = document.createElement('p');
    remove.classList.add('remove');
    remove.textContent = 'Remove';
    footer.appendChild(remove);
    remove.setAttribute('data', data);
    data += 1;
}

cardGroup.addEventListener('click', removeCard);

function removeCard(e) {
    if (e.target.classList.contains('remove')) {
        let card = e.target.parentElement.parentElement;
        cardGroup.removeChild(card);
        console.log('card removed!');
        console.log(e);
    }
}

// toggle off
function hide(classname) {
    document.querySelector(classname).style.display = 'none';
}

// toggle on
function show(classname) {
    document.querySelector(classname).style.display = 'inline-block';
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

// modal > user clicks outside of modal
modal.addEventListener('click', function() {
    hide('.dark-overlay');
})

// modal > user clicks 'add book'
modalAdd.addEventListener('click', function() {
    addBook();
})