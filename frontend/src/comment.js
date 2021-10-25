class Comment {
    constructor(comment) {
        this.id = comment.id
        this.content = comment.attributes.content
        this.book = comment.attributes.book
        Comment.all.push(this)
    }

    static findCommentsByBook(bookId) {
        let requestedBook = Book.findById(bookId)
        let bookComments = []
        console.log(requestedBook)
        return
    }
}

Comment.all = []