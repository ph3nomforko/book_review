const endPoint = "http://localhost:3000/api/v1/books"

document.addEventListener('DOMContentLoaded', () => {
    getBooks()

    let addBookForm = document.querySelector('#add-book-form')
    addBookForm.addEventListener('submit', (e) => createFormHandler(e))
})

function getBooks() {
    fetch(endPoint)
    .then(response => response.json())
    .then(books => {
        books.data.forEach(book => { render(book) })
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

function postBook(title, author, description, year_published, image_url, category_id) {
    console.log(title, author, description, year_published, image_url, category_id)
    let bodyData = {title, author, description, year_published, image_url, category_id}
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(book => {
        console.log(book)
        const bookData = book.data
        render(bookData)
    })
}

function render(book) {
    const bookMarkup =
        `<div data-id=${book.id}>
            <img src=${book.attributes.image_url} width="300" height="350">
            <h3>${book.attributes.title}</h3>
            <p>${book.attributes.author}</p>
            <p>${book.attributes.category.name}</p>
        </div><br><br>`
    document.querySelector('#book-container').innerHTML += bookMarkup
}