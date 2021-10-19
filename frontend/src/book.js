class Book {
    constructor(book) {
        this.id = book.id
        this.title = book.attributes.title
        this.author = book.attributes.author
        this.description = book.attributes.description
        this.year_published = book.attributes.year_published
        this.image_url = book.attributes.image_url
        this.category = book.attributes.category
        Book.all.push(this)
    }
    renderBookCard() {
        return `
            <div data-id=${this.id}>
                <img src=${this.image_url} height="200" width="250">
                <h3>${this.title}</h3>
                <p>${this.category.name}</p>
            </div><br><br>`
    }
}

Book.all = []