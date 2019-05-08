"use strict"; // Don't remove it.
// Create app below this line.
let rootDiv = document.getElementById("root");

//Create Input DIV
let inputDiv = document.createElement("div");
inputDiv.id = "inputDiv";
document.getElementById("root").appendChild(inputDiv);

//Create h2 tag
let h2 = document.createElement("h2");
h2.innerHTML = "MY TODO LIST";
document.getElementById("inputDiv").appendChild(h2);

let totalTasks = document.createElement("span");
totalTasks.className = "span";
totalTasks.style.fontSize = "10";
totalTasks.innerHTML = "(0)";
h2.appendChild(totalTasks);

//Create input field and submit button container div
let inputContainer = document.createElement("div");
inputContainer.id = "inputContainer";
document.getElementById("inputDiv").appendChild(inputContainer);

//create ipput field
let txt = document.createElement("input");
txt.id = "add-todo";
txt.className = "add-todo";
txt.type = "text";
txt.placeholder = "Add your item";
document.getElementById("inputContainer").appendChild(txt);

//create add button
let btn = document.createElement("input");
btn.id = "add-btn";
btn.className = "add-btn";
btn.type = "button";
btn.value = "Add";
document.getElementById("inputContainer").appendChild(btn);

//DISPLAY LIST DIV
let listdiv = document.createElement("div");
listdiv.id = "listDiv";
document.getElementById("root").appendChild(listdiv);

// Create UL
let ul = document.createElement("ul");
ul.id = "ul";
ul.style.color = "FFFFFF";
document.getElementById("listDiv").appendChild(ul);

//Add new Li when Add button is clicked
document.getElementById("add-btn").addEventListener("click", addLiText);
document.getElementById("add-btn").addEventListener("click", function(){

  let c = document.getElementById("ul").childElementCount;
  return totalTasks.innerHTML = "(" + c + ")";

});
//Add new Li when enter key is pressed
document.getElementById("add-todo").addEventListener("keypress", e => e.keyCode === 13 && addLiText());

function addLiText() {
  let inputText = document.getElementById("add-todo").value;
  let c = document.getElementById("ul").childElementCount;

  if (inputText === "") {
    // || inputText.match(/\s/g) !== null
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    let liText = document.createTextNode(inputText);
    li.appendChild(liText);

    document.getElementById("ul").appendChild(li);
    totalTasks.innerHTML = "(" + c + ")";
    document.getElementById("add-todo").value = "";

    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "X";
    deleteBtn.className = "deleteLi";
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function() {
      ul.removeChild(li);
      return (totalTasks.innerHTML = "(" + c + ")");
    });
  }
}