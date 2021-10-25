class Comment {
    constructor(comment) {
        this.id = comment.id
        this.content = comment.attributes.content
        this.username = comment.attributes.username
        this.book = comment.attributes.book
        Comment.all.push(this)
    }

    renderCommentsModal() {
        return `
        <div class="modal-header">
            <h3>${this.book.title}</h3>
        </div>
        <div class="modal-body">
            <h6>Year Published: ${this.content}</h6>
            <p>Genre: ${this.category.name}<br>
            Sumamry: ${this.description}</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>`
}

    findCommentsByBook(bookId) {
        let bookComments = []
        bookComments = Comment.all.forEach(element => {
            element.attributes.book.id === bookId
            bookComments.push(element)
        })
        console.log(bookComments)
    }
}

Comment.all = []