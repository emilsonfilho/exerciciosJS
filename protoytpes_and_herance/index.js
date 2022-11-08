class Book {
    constructor(name, year) {
        this.name = name
        this.year = year
    }
}

class Editor extends Book {
    super(editor) {
        this.editor = editor
    }
    
    completed() {
        console.log(`Showing ${this.name}, (${this.year}) - ${this.editor}`);    
    }
}

Book.prototype.show = function() {
    console.log(`Showing ${this.name}, (${this.year})`);
}

var book = new Book("Introduction to JavaScript", 2008)

console.log(book)
console.log(book.name)
console.log(book.year)

let book2 = new Editor("Introduction to JavaScript", 2008, "Saraiva")

console.log(book2)
console.log(book2.name)
console.log(book2.year)
book2.show() // Showing Introduction to JavaScript, (2008) cuz the __proto__ is from Book, not Editor
