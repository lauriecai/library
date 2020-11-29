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
const removeLinks = document.getElementsByClassName('remove');

// -----FUNCTIONS-----
// object constructor
function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
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
}

function removeBook(e) {
    // find index of book from which user clicked 'remove'
    let removeIndex = e.target.getAttribute('data');
    // remove that index from library
    myLibrary.splice(removeIndex, 1);
    // remove card from frontend
    let card = e.target.parentElement.parentElement;
    cardGroup.removeChild(card);
    // reassign data attributes
    data = 0;
    for (i = 0; i < removeLinks.length; i++) {
        removeLinks[i].setAttribute('data', data);
        data += 1;
    }
    // display null state if library's empty
    checkNullState();
    // summary
    console.log('----- updated -----')
    console.log(myLibrary);
    console.log(removeLinks);
}

// generate library
function generateLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
        displayBookInfo(i);
    }
    // close modal
    hide('.dark-overlay');
    hide('.null-state')
    // reset values
    modalTitle.value = '';
    modalAuthor.value = '';
    modalPages.value = '';
    // show button
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
    remove.setAttribute('data', data);
    data += 1;
    footer.appendChild(remove);
    remove.addEventListener('click', removeBook);
}

// toggle off
function hide(classname) {
    document.querySelector(classname).style.display = 'none';
}

// toggle on
function show(classname) {
    document.querySelector(classname).style.display = 'inline-block';
}

// check if library is empty
function checkNullState() {
    if (myLibrary.length == 0) {
        nullState.style.display = 'block';
        hide('.button-top-right');
    } 
}

// -----FLOW-----
// check state
checkNullState();

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

window.addEventListener('click', outsideClick);

function outsideClick(e) {
    if (e.target == modal) {
        hide('.dark-overlay');
    }
}

// modal > user clicks 'add book'
modalAdd.addEventListener('click', function() {
    addBook();
})