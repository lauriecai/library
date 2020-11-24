let myLibrary = [];

const book0 = new book('The Life-Changing Magic of Tidying Up', 'Marie Kondo', '226 Pages');
const book1 = new book('Harry Potter and the Chamber of Secrets','J.K. Rowling', '341 Pages')

myLibrary.push(book0, book1);

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

// selectors
const cardGroup = document.querySelector('.card-group');
const card = document.querySelector('.card');

// functions
function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    cardGroup.appendChild(card);
}

function addBookToLibrary() {
    for (i = 0; i < myLibrary.length; i++) {

        // create 'card' div
        createCard();
        // create 'title', 'author', and 'page-count' children elements
        const title = document.createElement('p');
        title.classList.add('title');
        card.appendChild(title);

        const author = document.createElement('p');
        title.classList.add('author');
        card.appendChild(author);

        const pageCount = document.createElement('p');
        title.classList.add('page-count');
        card.appendChild(pageCount);

        // assign title, author, and page count
        // document.querySelector('.title').textContent = book[i].title;
        // document.querySelector('.author').textContent = book[i].author;
        // document.querySelector('.title').textContent = book[i].pageCount;
    }
}