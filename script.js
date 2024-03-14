const inputBox = document.getElementById("inbox");
const listContainer = document.getElementById("list-container"); //create a variable called listContainer in order to be able to reference list-container


function addtask(){
    if(inputBox.value === ''){
        alert("FIND SOMETHING TO DO!!!")
    }
    else{
        let li = document.createElement("li");  // creates a html element called li
        li.innerHTML = inputBox.value; //adds whatever was inside the input box into the new html element
        listContainer.appendChild(li); //displays the new html element
        let span = document.createElement("span");
        span.innerHTML ="\u00d7"; //adds a cross icon at the end of the list item
        li.appendChild(span);
    }
    inputBox.value = ""; //after adding the text the input field gets cleared
    savedata(); //after adding any li saveData function will be called
}

listContainer.addEventListener("click", function(e){ //when clicking on anything in the list container
    if(e.target.tagName === "LI"){ //checks where we clicked. Either on a list item or on the x
        e.target.classList.toggle("checked"); //if LI is clicked the "checked" class name will be activated (line through li)
        savedata(); //after adding any li saveData function will be called

    }
    else if(e.target.tagName === "SPAN"){ //Else if the (x) is clicked, li will be removed
        e.target.parentElement.remove(); //removed li
        savedata(); //after adding any li saveData function will be called
    }
})

function savedata(){
    console.log("Before saving:", listContainer.innerHTML);
    localStorage.setItem("data", listContainer.innerHTML);
    console.log("After saving:", localStorage.getItem("data"));
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
