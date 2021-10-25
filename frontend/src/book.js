class Book {
    constructor(book) {
        this.id = book.id
        this.title = book.attributes.title
        this.author = book.attributes.author
        this.description = book.attributes.description
        this.year_published = book.attributes.year_published
        this.image_url = book.attributes.image_url
        this.category = book.attributes.category
        this.comments = book.attributes.comments
        Book.all.push(this)
    }
    renderBookCard() {
        return `
            <div class="col">
                <div class="card shadow-sm">
                    <img src=${this.image_url} class="card-img-top" width="100%">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-sm btn-outline-secondary" type="button" data-bs-toggle="modal" data-bs-target="#bookModal" id="book-${this.id}">View Book</button>
                        </div>
                    </div>
                </div>
            </div>`
    }

    renderBookModal() {
        let commentHtml = ""
        this.comments.forEach(comment => {
            commentHtml += `
            <p>${comment.content} by ${comment.username}</p>`
        })
        return `
            <div class="modal-header">
                <img src=${this.image_url}>
            </div>
            <div class="modal-body">
                <h3>Title: ${this.title}</h3>
                <h5>Author: ${this.author}</h5>
                <h6>Year Published: ${this.year_published}</h6>
                <p>Genre: ${this.category.name}<br>
                Sumamry: ${this.description}</p>
                <h5>Comments</h5>
                ${commentHtml}
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">Add a Comment</button>
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            </div>`
    }

    static findById(id) {
        return this.all.find(book => book.id === id)
    }

}

Book.all = []