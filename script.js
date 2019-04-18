'use strict'; // Don't remove it.
// Create app below this line.
let rootDiv = document.getElementById('root');

//Create Input DIV
let inputDiv = document.createElement('div');
inputDiv.id = 'inputDiv';
document.getElementById('root').appendChild(inputDiv);

//Create h2 tag
let h2 = document.createElement('h2');
h2.innerHTML = 'MY TODO LIST';
document.getElementById('inputDiv').appendChild(h2);

//Create input field and submit button container div
let inputContainer = document.createElement('div');
inputContainer.id = 'inputContainer';
document.getElementById('inputDiv').appendChild(inputContainer);

//create ipput field
let txt = document.createElement('input');
txt.id = 'add-todo';
txt.className = 'add-todo';
txt.type = 'text';
txt.placeholder = 'Add your item';
document.getElementById('inputContainer').appendChild(txt);

//create add button
let btn = document.createElement('input');
btn.id = 'add-btn';
btn.className = 'add-btn';
btn.type = 'button';
btn.value = 'Add';
document.getElementById('inputContainer').appendChild(btn);

//DISPLAY LIST DIV
let listdiv = document.createElement("div");  
listdiv.id='listDiv';
document.getElementById("root").appendChild(listdiv);

// Create UL 
let ul = document.createElement('ul');
ul.id = 'ul';
ul.style.color = 'FFFFFF';
document.getElementById('listDiv').appendChild(ul);

//Add new Li when Add button is clicked
document.getElementById('add-btn').addEventListener('click', function () {
    let li = document.createElement("li");
    let inputText= document.getElementById("add-todo").value;
    let liText = document.createTextNode(inputText);
    li.appendChild(liText);
    if (inputText === '' ) {           //inputText.match(/\s/g)
      alert("You must write something!");
    } else {
      document.getElementById("ul").appendChild(li);
    }
    document.getElementById("add-todo").value = "";

    let span = document.createElement('span');
    span.innerHTML = 'X';
    span.className = 'deleteLi';
    li.appendChild(span);
    span.addEventListener('click', function (){

      ul.removeChild(li);
    }
    )
  });

  //Add new Li when enter key is pressed
  document.getElementById('add-todo').addEventListener('keyup', function(event){
    event.preventDefault();
    if(event.keyCode === 13){

    let li = document.createElement("li");
    let inputText= document.getElementById("add-todo").value;
    let liText = document.createTextNode(inputText);
    li.appendChild(liText);
    if (inputText === '' ) { // || inputText.match(/\s/g !== null
      alert("You must write something!");
    } else {
      document.getElementById("ul").appendChild(li);
    }
    document.getElementById("add-todo").value = "";

    let span = document.createElement('span');
    span.innerHTML = 'X';
    span.className = 'deleteLi';
    li.appendChild(span);
    span.addEventListener('click', function (){
          ul.removeChild(li);
    })
    }
  });