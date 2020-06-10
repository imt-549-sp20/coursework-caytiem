function renderBooks(book_list) {
    //sort the movie list by sales descending
    book_list.sort(function(record1, record2) {
        return record2.revenue - record1.revenue; 
    });
    
    //select the <tbody> element
    //you can make this more precise by using a descendant selector,
    //referring to a particular <table> by ID or style class name
    var tbody = document.querySelector(".books tbody");

    //clear any existing content in the body
    tbody.textContent = "";

    //for each movie
    for (var i = 0; i < book_list.length; i++){
    //render the movie row
    var row = renderBook(book_list[i]);

    //append it to the table
        tbody.appendChild(row);
    }
    
}

function renderBook (book) {
//create the <tr> element
var tr = document.createElement("tr");

//create and append the <td> elements
tr.appendChild(renderBookProp(book.title, true));
tr.appendChild(renderBookProp(book.author));
tr.appendChild(renderBookProp(book.genre));

//return the table row to the caller
return tr;
}

function renderBookProp(content, nonNumeric) {
        //create the new <td> element
        var td = document.createElement("td");
    
        //set its text content to the provided value
        td.textContent = content;
    
        //if it should be formatted as numeric...
        if (nonNumeric) {
            //add the "numeric" style class
            td.classList.add("non-numeric");
        }
    
        //return the new element to the caller
        return td;
}

var searchInput = document .getElementById("book-filter");

// should this movie be in our list?
function isBookFound (book){
    //get the user input
    var userInput = searchInput.value;

    // Make the input lowercase 
    var lowercaseUserInput = userInput.toLowerCase();

    // make the movie title lowercase
    var lowercaseTitle = book.title.toLowerCase();

    if (lowercaseTitle.indexOf(lowercaseUserInput) >= 0){
        return true;
    } else {
        return false;
    }
}

//listen for when a user types in the filter field 
searchInput.addEventListener("input", function () {
    //find any movies that match the user input
    var filtered_books = BOOKS.filter(isBookFound); 

    //update the movie table with the new list
    renderBooks(filtered_books);
});