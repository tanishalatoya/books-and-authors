var Book = require('./book.js');

class Author {
  constructor(anAuthor) {
    this.first = anAuthor.first;
    this.last = anAuthor.last;
    this.books = [];
  }

  write(title, publicationYear) {
    var book = new Book(this.first, this.last, title, publicationYear);
    this.books.push(book);
    return book;
    }

}

module.exports = Author;
