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
                        </div>
                    </div>
                </div>
            </div>`

        //    `<div data-id=${this.id}>
        //       <img src=${this.image_url} height="200" width="250">
        //        <h3>${this.title}</h3>
        //        <p>${this.category.name}</p>
        //   </div><br><br>`
    }

    renderBookModal() {
        console.log(this.title)
       return `
            <div class="modal fade" id="bookModal" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${this.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>`   
    }
    
    static findById(id) {
        return this.all.find(book => book.id === id)
    }
}

Book.all = []