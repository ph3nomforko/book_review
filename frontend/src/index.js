const endPoint = "http://localhost:3000/api/v1/books"

document.addEventListener('DOMContentLoaded', () => {
    getBooks()

    let addBookButton = document.getElementById("add-book-button")
    addBookButton.addEventListener("click", (e) => createFormHandler(e))

    let modalButton = document.getElementById('bookModal')
    console.log(modalButton)
})

function getBooks() {
    fetch(endPoint)
    .then(response => response.json())
    .then(books => {
        books.data.forEach(book => {
            let newBook = new Book(book)
            document.querySelector('#book-container').innerHTML += newBook.renderBookCard()
        })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector("#input-title").value
    const authorInput = document.querySelector("#input-author").value
    const descriptionInput = document.querySelector("#input-description").value
    const publishingYearInput = document.querySelector("#input-published").value
    const imgUrlInput = document.querySelector("#input-url").value
    const categoryId = parseInt(document.querySelector("#categories").value)
    postBook(titleInput, authorInput, descriptionInput, publishingYearInput, imgUrlInput, categoryId)
}

//button.addEventListener('submit', (e) => {
//    e.preventDefault()
//    const titleInput = document.querySelector("#input-title").value
//    const authorInput = document.querySelector("#input-author").value
//    const descriptionInput = document.querySelector("#input-description").value
//    const publishingYearInput = document.querySelector("#input-published").value
//    const imgUrlInput = document.querySelector("#input-url").value
//    const categoryId = parseInt(document.querySelector("#categories").value)
//    postBook(titleInput, authorInput, descriptionInput, publishingYearInput, imgUrlInput, ////categoryId)
//})

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