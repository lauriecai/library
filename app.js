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

    static addBook() {
        // grab inputted values
        const titleValue = document.querySelector('.titleInput').value;
        const authorValue = document.querySelector('.authorInput').value;
        const pagesValue = document.querySelector('.pagesInput').value;
        console.log({titleValue, authorValue, pagesValue});

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
        // hide null state
        document.querySelector('.null-state').style.display = 'none';
        // close modal
        document.querySelector('.dark-overlay').style.display = 'none';

        // populate book info
        document.querySelector('.title').textContent = titleValue;
        document.querySelector('.author').textContent = authorValue;
        document.querySelector('.pages').textContent = pagesValue;
        document.querySelector('.remove').textContent = 'Remove';
    }
}

// event listeners

// add book button > invokes add book modal
Array.from(document.getElementsByClassName('add-btn')).forEach(element => {
    element.addEventListener('click', UI.displayAddModal);
})

// add book button (modal) > confirms book add
document.getElementById('add-btn-modal').addEventListener('click', UI.addBook);