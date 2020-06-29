
var myList = [];

//  Pressing the Enter key clicks Add to List button
var input = document.getElementById('listItem');
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
	  event.preventDefault();
	  document.getElementById('addBtn').click();
  }
});

//  New item is formatted to add to ordered list
function addToList() {
	var newItem = "<li>" + document.getElementById('listItem').value + "</li>";

	//  Prevents blank inputs
	if (newItem != "<li></li>") {

	//  Adds new item to top of list 
	if (document.getElementById('top').checked) {
	myList.unshift(newItem);
	}

	//  Adds new item to bottom of list
	else if (document.getElementById('bottom').checked) {
		myList.push(newItem); 	
	}  

}
	document.getElementById('list-content').innerHTML =  myList.join("");  // Output updated list
    	document.getElementById('form').reset();	// Reset Form - clear listItem input
    	document.getElementById('listItem').focus();  // Move cursor to listItem input
};

function removeFromList() {
	document.getElementById('removeItem');
}

document.getElementById('bottom').checked = true;

/*  Print button only prints the shopping list  */

function printList() {
        $("#shoppingList").addClass("printable");
        window.print();
}
