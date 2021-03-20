//error message handling
const errorMessage = document.getElementById("errorMessage");
errorMessage.remove();

//
const toDoList = document.getElementById("ToDos");

//Create Dummy To Dos
const dummyToDo = document.createElement("button");
const dummyToDo2 = document.createElement("button");
dummyToDo.innerHTML = "Dummy To Do";
dummyToDo2.innerHTML = "Dummy To Do 2";

//Handle input
const inputNewToDo = document.getElementById("inputNewToDo");
document.addEventListener("keypress", function(event) {
    const key = event.key;
    if (key == "Enter"){
        let inputText = inputNewToDo.value;
        if (inputText != ""){
            createNewToDo(inputText);
        }
        else {
            console.log("Nothing was entered.");
        }
        inputNewToDo.value = "";
    }
})

function createNewToDo(inputText) {
    const newToDo = document.createElement("button");
    newToDo.innerHTML = inputText;
    newToDo.addEventListener("click", () =>{
        newToDo.remove();
    })
    toDoList.appendChild(newToDo);
}