
//create element
var newElement = document.createElement("h3");
console.log(newElement);

//create textnode
var newText = document.createTextNode("This is just a text.");
console.log(newText);

//create comment
var newComment = document.createComment("This is comment.");
console.log(newComment);

//append child
newElement.appendChild(newText);
document.getElementsByClassName('test')[0].appendChild(newElement);

//insert before
var insert = document.getElementsByClassName("test")[0];
insert.insertBefore(newElement,insert.childNodes[0]);













































































