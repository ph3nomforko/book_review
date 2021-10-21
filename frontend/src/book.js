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
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-sm btn-outline-secondary" type="button" data-bs-toggle="modal" data-bs-target="#bookModal" id="${this.id}">View Book</button>
                            <small class="text-muted">${this.category.name}</small>
                        </div>
                    </div>
                </div>
            </div>`
    }

    renderBookModal() {
        console.log(this.title)
        return `
            <div class="modal-header">
                <img src=${this.image_url}>
            </div>
            <div class="modal-body">
                <h3>${this.title}</h3>
                <h5>${this.author}</h5>
                <h6>${this.year_published}</h6>
                <p>${this.description}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>`
    }

    static findById(id) {
        return this.all.find(book => book.id === id)
    }
}

Book.all = []