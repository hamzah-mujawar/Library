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

function displayTable()
{
    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    myLibrary.forEach((book, index)  => {   
        let row = document.createElement("tr");

        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        let c5 = document.createElement("td");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.index = index;//set the data-index attribute to the book's index

        c1.innerText = book.title;
        c2.innerText = book.author;
        c3.innerText = book.pages;
        c4.innerText = book.read ? "Yes" : "No";//display yes or no based on read status
        c5.appendChild(deleteButton);

        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
        row.appendChild(c5);

        deleteButton.addEventListener("click", (event)=>{
            const bookIndex = event.target.dataset.index; //get the index from the button
            myLibrary.splice(bookIndex, 1); //remove that book from the array
            displayTable();
        })
        
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
    addBooks.close(addBookToLibrary(
        title_form.value,
        author_form.value,
        pages_form.value,
        read_checkbox.checked
    ));
})

displayTable();
