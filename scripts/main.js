const myLibrary = [];

const showButton = document.getElementById("showDialog");
const addBooks = document.getElementById("addBooks");
const outputBox = document.querySelector("output");
const author_form = document.getElementById("author");
const title_form = document.getElementById("title");
const pages_form = document.getElementById("pages");
const read_checkbox = document.getElementById("read");
const confirmBtn = document.getElementById("confirmBtn");

function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayTable(){
    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    myLibrary.forEach(book  => {   
        let row = document.createElement("tr");
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");

        c1.innerText = book.title;
        c2.innerText = book.author;
        c3.innerText = book.pages;
        c4.innerText = book.read ? "Yes" : "No";//display yes or no based on read status

        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);

        table.appendChild(row);
    });
}

function addBookToLibrary(title, author, pages, read)
{
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayTable();
}


showButton.addEventListener("click", ()=>{
    addBooks.showModal();
})

confirmBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    addBooks.close(addBookToLibrary(title_form.value,
        author_form.value,
        pages_form.value,
        read_checkbox.checked
    ));
})

displayTable();
