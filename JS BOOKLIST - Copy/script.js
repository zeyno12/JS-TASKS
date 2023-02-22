const Title = document.querySelector("#title");
const Author = document.querySelector("#author");
const ISBN = document.querySelector("#isbn");
const BookForm = document.getElementById("book-form");

function Book(title, author, isbn) {
  (this.title = title), (this.author = author), (this.isbn = isbn);
}
function UI() {}
BookForm.addEventListener("submit", function (e) {
  const title = Title.value,
    author = Author.value,
    isbn = ISBN.value;
  e.preventDefault();
  const book = new Book(title, author, isbn);
  const ui = new UI();
  ui.clearField();
  if (title.trim() === "" || author.trim() === "" || isbn.trim() === "") {
    ui.ShowAlert("please fill in all fields",'error');
  } else {
    ui.adBookList(book);
    ui.ShowAlert("Kitab Ugurla elave olundu)",'success')
  }
  Store.addBook(book)

});
UI.prototype.deleteBook=function(target){
    if(target.className==='delete'){
       target.parentElement.parentElement.remove() 
    }
}

document.getElementById('book-list').addEventListener('click',function(e){
    e.preventDefault()
    const ui=new UI()
    ui.deleteBook(e.target)
    ui.ShowAlert("Book Removed",'success')

})


UI.prototype.adBookList = function (book) {
  const list = document.getElementById("book-list");
  const row = document.createElement("tr");
  row.innerHTML += `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td> <a href="#" class="delete">X </a> </td>
    `;
  list.appendChild(row);
  console.log( list.appendChild(row));
};
UI.prototype.clearField = function () {
  Title.value = " ";
  Author.value = " ";
  ISBN.value = " ";
};
UI.prototype.ShowAlert = function (sms, className) {
  (this.sms = sms), (this.className = className);
  const div = document.createElement("div");
  div.className = ` ${className}`;
  div.appendChild(document.createTextNode(sms));
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  container.insertBefore(div,form)
  setTimeout(function(){
      document.querySelector(".alert").remove()},3000)
};

 //LocalStorage
class Store{
  
    static getBooks(){
        let books;
        if(localStorage.getItem("books")===null){
        books=[]
        }
        else{
           books=JSON.parse(localStorage.getItem('books')) 
        }
        return books
    }
    static displayBooks(){
        const books=Store.getBooks()
        books.forEach(book => {
            const ui=new UI()
            ui.addBookToList(book)
        });
    }
    static addBook(book){
        const books=Store.getBooks()
        books.push(book)
        localStorage.setItem('books',JSON.stringify(books))
    }
    static removebook(){}
}