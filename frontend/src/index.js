const endPoint = "http://localhost:3000/api/v1/books"

document.addEventListener('DOMContentLoaded', () => {
    getBooks()
})

function getBooks() {
    fetch(endPoint)
    .then(response => response.json())
    .then(books => {
        books.data.forEach(book => {
            let newBook = new Book(book, book.attributes)
            render(book)
        })
    })
}

document.addEventListener('submit', (e) => {
    e.preventDefault()
    const titleInput = document.querySelector("#input-title").value
    const authorInput = document.querySelector("#input-author").value
    const descriptionInput = document.querySelector("#input-description").value
    const publishingYearInput = document.querySelector("#input-published").value
    const imgUrlInput = document.querySelector("#input-url").value
    const categoryId = parseInt(document.querySelector("#categories").value)
    postBook(titleInput, authorInput, descriptionInput, publishingYearInput, imgUrlInput, categoryId)
})

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
        // const bookData = book.data
        const bookMarkup =
        `<div data-id=${book.id}>
            <img src=${book.image_url} width="200" height="250">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.category.name}</p>
        </div><br><br>`
    document.querySelector('#book-container').innerHTML += bookMarkup
    })
}