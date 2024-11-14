const myLibrary = [];
let t = "";

function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read)
{
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("Book", "author", "pages", "read");
addBookToLibrary("Book", "author", "pages", "read");

myLibrary.forEach((book)=>{
    var tr = "<tr>";
    tr += "<td>"+book.title+"</td>";
    tr += "<td>"+book.author+"</td>";
    tr += "<td>"+book.pages+"</td>";
    tr += "<td>"+book.read+"</td>";
    tr += "</tr>";
    t += tr;
})
document.getElementById("table").innerHTML += t;
