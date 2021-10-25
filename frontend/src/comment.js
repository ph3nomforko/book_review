class Comment {
    constructor(comment) {
        this.id = comment.id
        this.content = comment.attributes.content
        this.book = comment.attributes.book
        Comment.all.push(this)
    }
}

Comment.all = []