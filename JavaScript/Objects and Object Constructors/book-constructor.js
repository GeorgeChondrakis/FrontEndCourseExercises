function book(title, author, year_published, pages, isRead) {
    this.title = title;
    this.author = author;
    this.year_published = year_published;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        if (!isRead) {
            return `${this.title} by ${this.author}, published in ${this.year_published}, ${this.pages} pages, not read yet`;
        } else {
            return `${this.title} by ${this.author}, published in ${this.year_published}, ${this.pages} pages, has been read`;
        }
    };
}

const book1 = new book("Ithaca", "Kavafys", 1911,  1, true);

console.log(book1.info()); 