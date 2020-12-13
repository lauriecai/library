// book class - represents a book
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

// UI class - represents the user interface
class UI {
    static displayAddModal() {
        document.querySelector('.dark-overlay').style.display = 'block';
    }

    static addBook(book) {
        // create book card
        const card = document.createElement('div');
        card.className = 'card';

        // create status, title, author, and pages
        const status = document.createElement('div');
        status.className = 'status';
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.className = 'checkbox';
            const label = document.createElement('label');
            label.textContent = "I've Read This";
        status.appendChild(input);
        status.appendChild(label);

        const title = document.createElement('p');
        title.className = 'title';

        const author = document.createElement('p');
        author.className = 'author';

        const footer = document.createElement('div');
        footer.className = 'book-footer';
            const pages = document.createElement('p');
            pages.className = 'pages';
            const remove = document.createElement('p');
            remove.className = 'remove';
        footer.appendChild(pages);
        footer.appendChild(remove);

        // append card children to card
        card.appendChild(status);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(footer);

        // append card to card group
        const cardGroup = document.querySelector('.card-group');
        cardGroup.appendChild(card);

        // populate book info
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        remove.textContent = 'Remove';
        if (document.getElementById('read-state').checked == true) {
            input.checked = true;
        }
    }

    static hideNullState() {
        document.querySelector('.null-state').style.display = 'none';
        document.getElementById('add-btn-main').style.display = 'inline-block';
    }

    static dismissModal() {
        document.querySelector('.dark-overlay').style.display = 'none';
        document.querySelector('.titleInput').value = '';
        document.querySelector('.authorInput').value = '';
        document.querySelector('.pagesInput').value = '';
    }

    static removeBook(el) {
        if (el.classList.contains('remove')) {
            el.parentElement.parentElement.remove();
        }
    }
}

// event listeners

// add book button > invokes add book modal
Array.from(document.getElementsByClassName('add-btn')).forEach(element => {
    element.addEventListener('click', UI.displayAddModal);
})

// add book button (modal) > confirms book add
document.getElementById('add-btn-modal').addEventListener('click', () => {
    // grab inputted values
    const title = document.querySelector('.titleInput').value;
    const author = document.querySelector('.authorInput').value;
    const pages = document.querySelector('.pagesInput').value;

    // instantiate new book
    const book = new Book(title, author, pages);

    // add book
    UI.addBook(book);

    // dismiss modal
    UI.dismissModal();

    // dismiss null state
    UI.hideNullState();
});

// remove book
document.querySelector('.card-group').addEventListener('click', e => {
    // remove book
    UI.removeBook(e.target);

    // display null state if there are no books
    if (document.querySelector('.card-group').hasChildNodes == false) {
        document.querySelector('.null-state').style.display = 'block';
    }
})