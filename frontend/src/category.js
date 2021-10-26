class Category {
    constructor(category) {
        this.id = category.id
        this.name = category.attributes.name
        this.books = category.attributes.books
    }

    renderCategoryList() {
        return `
        <option value="${this.id}">${this.name}</option>
        `
    }
}