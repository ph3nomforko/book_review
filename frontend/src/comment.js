class Comment {
    constructor(comment) {
        this.id = comment.id
        this.content = comment.attributes.content
        this.username = comment.attributes.username
        this.book = comment.attributes.book
        Comment.all.push(this)
    }
}

Comment.all = []