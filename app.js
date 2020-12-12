// book class - represents a book
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}



// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//         this.patients = 0;
//     }
//     login() {
//         console.log(this.email + ' just logged in');
//         return this;
//     }
//     logout() {
//         console.log(this.email + ' just logged out');
//         return this;
//     }
//     updatePatients() {
//         this.patients++;
//         console.log(this.name + ' has had ' + this.patients + ' patients.');
//         return this;
//     }
// }