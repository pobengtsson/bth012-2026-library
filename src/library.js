export class Library {
  constructor() {
    this.books = [{
      title: 'Harry Potter and Chamber of Secrets'
    }, {
      title: 'Famous BTH Teachers and other myths'
    }, {
      title: 'Best recipes for grilled frog.'
    }]
  }
  addBook(book) {
    this.books.push(book)
  }
  search(term) {
    return this.books.filter((book) => book.title.includes(term))
  }
}
