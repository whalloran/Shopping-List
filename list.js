
var myList = [];

//Clears array and returns settings to default on page load
function pageLoad() {
	document.getElementById('bottom').checked = true;
	document.getElementById('listItem').focus();
	myList = [];
}

//  Clicks Add to List button when Enter key is pressed while input is in focus
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

		//  Adds new item to bottom of list (default)
		if (document.getElementById('bottom').checked) {
			myList.push(newItem); 	
		} 

		//  Adds new item to top of list if selected in settings
		else if (document.getElementById('top').checked) {
			myList.unshift(newItem);
		}
	}

	document.getElementById('list-content').innerHTML =  myList.join("");  // Output updated list
    document.getElementById('form').reset();	// Reset Form - clear listItem input
    document.getElementById('listItem').focus();  // Move cursor to listItem input
}

// Removes last item from list
function removeLast() {
	myList.pop();
	document.getElementById('list-content').innerHTML = myList.join("");
}

// Toggle settings menu
function settings() {
	var set = document.getElementById('settings');
	if (set.style.display === "block") {
		set.style.display = "none";
		document.getElementById('settings-div').innerHTML = "<a href='#' id='settings-toggle' onclick='settings()'>+ Settings</a>";
	}

	else {
		set.style.display = "block";
		document.getElementById('settings-div').innerHTML = "<a href='#' id='settings-toggle' onclick='settings()'>Hide Settings</a>";
	}
}

// Print Shopping List
function printList() { 
			var divContents = document.getElementById('shoppingList').innerHTML; 
			var a = window.open('', '', 'height=500, width=500'); 
			a.document.write('<html><head><title>Print Shopping List</title><link rel="stylesheet" type="text/css" href="style.css"></head>');
			a.document.write('<body style="background-color: #fff;"><div id="printView">');  
			a.document.write(divContents); 
			a.document.write('</div></body></html>'); 
			a.document.close(); 
			a.print(); 
		} 
