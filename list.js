
var myList = [];

//  
var input = document.getElementById('listItem');
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById('addBtn').click();
  }
});

function addToList() {
	var newItem = "<li>" + document.getElementById('listItem').value + "</li>";
   
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

/*
		Input to add item to list
		Assigns number to each item based on index (x = [index] + 1)
		Cross item off the list... strikethrough or check
		Remove item from list
		Print List 


		Create "X Remove" link next to each item to remove from list



*/



/*  Print button only prints the shopping list  */

function printList() {
        $("#shoppingList").addClass("printable");
        window.print();
      }



/*
if(document.getElementById('gender_Male').checked) {
  //Male radio button is checked
}else if(document.getElementById('gender_Female').checked) {
  //Female radio button is checked
}

*/
