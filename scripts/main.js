const myLibrary = []; // our library array of books

//DOM elements for forms and buttons
const showButton = document.getElementById("showDialog");
const addBooks = document.getElementById("addBooks");
const outputBox = document.querySelector("output");
const author_form = document.getElementById("author");
const title_form = document.getElementById("title");
const pages_form = document.getElementById("pages");
const read_checkbox = document.getElementById("read");
const confirmBtn = document.getElementById("confirmBtn");


class Book{
    constructor(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
    }
    toggleRead() {
	this.read ^= 1;
    }
}

/**
 * function used to update the table in the DOM, this function does the following things:
/ * 1) Adds a table row and fills it with book details such as title, author, pages, and if the user has read the book.
 * 2) Adds a delete button for that book entry and an event listener for that button that checks if the button is pressed,
 * we delete that object in the myLibrary array and display the new table
 * 3) Adds a button to toggle if the book has been read, if pressed the function prototype method for every Book object
 * toggleRead() gets called and toggle the read attribute of the object.
 */
function displayTable()
{
    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    myLibrary.forEach(book  => {   
        let row = document.createElement("tr");

        //creating cells of the table for the book details
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        let c5 = document.createElement("td");
        let c6 = document.createElement("td");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        const readButton = document.createElement("button");
        readButton.textContent = "Toggle Read (True/False)";

        //assigning value to the cells
        c1.innerText = book.title;
        c2.innerText = book.author;
        c3.innerText = book.pages;
        c4.innerText = book.read ? "Yes" : "No";//display yes or no based on read status
        c5.appendChild(deleteButton);
        c6.appendChild(readButton);
        
        //appending cells to row
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
        row.appendChild(c5);
        row.appendChild(c6);
        
        //event listener to delete the book based on index
        deleteButton.addEventListener("click", ()=>{
            myLibrary.splice(book, 1); //remove that book from the array
            displayTable();
        });
        
        //event listener to toggle the books read status
        readButton.addEventListener("click", ()=>{
            book.toggleRead();
            displayTable();
        });
        
        table.appendChild(row);//add the row on the table body
    });
}
/**
 * function to push objects onto the myLibrary array and to update the 
 * table once a book is inserted
 */
function addBookToLibrary(title, author, pages, read)
{
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayTable(); //refresh the table
}

// Event listener to show the dialog box to enter book details
// We only want to display this dialog box when the user clicks on
// the button to add books
showButton.addEventListener("click", ()=>{
    addBooks.showModal();
});

/*
 * In the dialog box once the user fills up the form and clicks on confirm
 * we close the dialog box and add the book to the array myLibrary and display on the table
 */
confirmBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    addBooks.close(addBookToLibrary(
        title_form.value,
        author_form.value,
        pages_form.value,
        read_checkbox.checked
    ));
});


//displayTable(); //Initial call to display any prexisting books in the library
