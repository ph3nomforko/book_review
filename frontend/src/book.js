class Book {
    constructor(book, bookAttributes) {
        this.id = book.id
        debugger
        this.title = bookAttributes.title
        this.author = bookAttributes.author
        this.description = bookAttributes.description
        this.year_published = bookAttributes.year_published
        this.image_url = bookAttributes.image_url
        this.category = bookAttributes.category
        //Book.call.push(this)
    }
    //renderBookCard() {
    //    return `
    //        <div data-id=${this.id}>
    //            <img src=${this.image_url} height="200" width="250">
    //            <h3>${this.title}</h3>
    //            <p>${this.category.name}</p>
    //        </div><br><br>`
    //}
}

Book.all = []