const bookEndPoint = "http://localhost:3000/api/v1/books"
const commentEndPoint = "http://localhost:3000/api/v1/comments"


document.addEventListener('DOMContentLoaded', () => {
    getBooks()
    getComments()

    let addBookButton = document.getElementById("add-book-button")
    addBookButton.addEventListener("click", (e) => createBookFormHandler(e))

    let bookModal = document.getElementById("bookModal")
    bookModal.addEventListener('show.bs.modal', (e) => openBookModalHandler(e))
    bookModal.addEventListener('hide.bs.modal', (e) => closeModalHandler())

    let addCommentButton = document.getElementById("addCommentModal")
    addCommentButton.addEventListener("click", (e) => addCommentHandler(e))

    let viewCommentButton = document.getElementById("commentsModal")
    viewCommentButton.addEventListener('show.bs.modal', (e) => viewCommentsHandler(e))
})

function getBooks() {
    fetch(bookEndPoint)
    .then(response => response.json())
    .then(books => {
        books.data.forEach(book => {
            let newBook = new Book(book)
            document.querySelector('#book-container').innerHTML += newBook.renderBookCard()
        })
    })
}

function getComments() {
    fetch(commentEndPoint)
    .this(response => response.json())
    .then(comments => {
        comments.data.forEach(comment => {
            console.log(comment)
        })
    })
}

function createBookFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector("#input-title").value
    const authorInput = document.querySelector("#input-author").value
    const descriptionInput = document.querySelector("#input-description").value
    const publishingYearInput = document.querySelector("#input-published").value
    const imgUrlInput = document.querySelector("#input-url").value
    const categoryId = parseInt(document.querySelector("#categories").value)
    postBook(titleInput, authorInput, descriptionInput, publishingYearInput, imgUrlInput, categoryId)
}

function openBookModalHandler(e) {
    let button = e.relatedTarget
    let buttonId = button.id
    let parsedId = idParser(buttonId)
    let displayedBook = Book.findById(parsedId)
    document.querySelector(".modal-content").innerHTML += displayedBook.renderBookModal()
}

function viewCommentsHandler(e) {
    getComments()
    let button = e.relatedTarget
    let buttonId = button.id
    let bookId = idParser(buttonId)
    let displayedComments = Comment.findCommentsByBook(bookId)
}

function addCommentHandler(e) {

}

function closeModalHandler() {
    document.querySelector(".modal-content").innerHTML = ""
}

function postBook(title, author, description, year_published, image_url, category_id) {
    const bodyData = {title, author, description, year_published, image_url, category_id}
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(book => {
        const bookData = book.data
        let newBook = new Book(bookData)
        document.querySelector('#book-container').innerHTML += newBook.renderBookCard()
    })
}

function idParser(buttonId) {
    let tempId = buttonId.split("-")
    return tempId[1]
}