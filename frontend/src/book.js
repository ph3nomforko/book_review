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
            <div class="col">
                <div class="card shadow-sm">
                    <img src=${this.image_url} class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                        <p class="card-text">${this.author}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-muted">${this.category.name}</small>
                        </div>
                    </div>
                </div>
            </div>`
        //
        //    `<div data-id=${this.id}>
        //       <img src=${this.image_url} height="200" width="250">
        //        <h3>${this.title}</h3>
        //        <p>${this.category.name}</p>
        //   </div><br><br>`
    }
    static findById(id) {
        return this.all.find(book => book.id === id)
    }
}

Book.all = []