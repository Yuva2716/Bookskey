//selecting popup box, overlay and button

var popupOvarlay = document.querySelector('.popup-overlay')
var popupBox = document.querySelector('.popup-box')
var addpopupButton = document.getElementById("add-popup-btn")

addpopupButton.addEventListener("click",style)

function style(){
    popupOvarlay.style.display = "block";
    popupBox.style.display = "block";    
    document.getElementById("book-title-input").value = ""
    document.getElementById("book-author-input").value = ""
    document.getElementById("book-description-input").value = ""

    
}

//select cancle button

var cancelButton = document.getElementById("cancel-popup")

cancelButton.addEventListener("click", function(event){
    event.preventDefault()
    popupOvarlay.style.display = "none";
    popupBox.style.display = "none"

})

// select container ,add book-title ,book author,book des

var container = document.querySelector('.container')
var addBook = document.getElementById('add-book')
var bookTitleInput = document.getElementById('book-title-input')
var bookAuthorInput = document.getElementById('book-author-input')
var bookDesInput = document.getElementById('book-description-input')

addBook.addEventListener("click",function(event){
    event.preventDefault()
    var div= document.createElement('div')
    div.setAttribute('class',"book-container")
    div.innerHTML=`<h2>${bookTitleInput.value}</h2>
            <h5>${bookAuthorInput.value}</h5>
            <p>${bookDesInput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupOvarlay.style.display = "none";
    popupBox.style.display = "none"

    if(document.getElementById("book-title-input").value == "" || 
    document.getElementById("book-author-input").value == ""   ||
    document.getElementById("book-description-input").value == ""         
)
    
    {
        div.style.display="none"
        alert("Fill all the fields")
    }

})

function deletebook(event){
    event.target.parentElement.remove()
}
