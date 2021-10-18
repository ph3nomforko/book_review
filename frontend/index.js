const endPoint = "http://localhost:3000/api/v1/books"

document.addEventListener('DOMContentLoaded', () => {
    getBooks()
})

function getBooks() {
    fetch(endPoint)
    .then(response => response.json())
    .then(books => {
        books.data.forEach(book => {
            const bookMarkup =
            `<div data-id=${book.id}>
              <img src=${book.attributes.image_url} width="300" height="350">
              <h3>${book.attributes.title}</h3>
              <p>${book.attributes.author}</p>
              <p>${book.attributes.category.name}</p>
            </div><br><br>`
            document.querySelector('#book-container').innerHTML += bookMarkup
        })
    })
}

document.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
})