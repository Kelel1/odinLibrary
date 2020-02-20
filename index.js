function Book(title, author, pages, read) {
    this.title  = title
    this.author = author
    this.pages  = pages
    this.read   = read
}


Book.prototype.info = function() {
    return(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
}

function NewBook(title, author, pages, read) {
    this.title  = title
    this.author = author
    this.pages  = pages
    this.read   = read? 'has read': 'not read yet'
}

NewBook.prototype = Object.create(Book.prototype)

const life = new NewBook('Life', 'Ke', 298, true)
console.log(life.info())