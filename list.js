
var myList = [];

// Clears list and returns settings to default on page load
let pageLoad = () => {
	document.getElementById('bottom').checked = true;
	document.getElementById('capitalize').checked = true;
	document.getElementById('listItem').focus();
	document.getElementById('listItem').value = "";
	myList = [];
}

//  Clicks Add to List button when ENTER key is pressed while input is in focus
var input = document.getElementById('listItem');
input.addEventListener("keydown", (event) => {
	if (event.keyCode === 13) {
	event.preventDefault();
	document.getElementById('addBtn').click();
  }
});

//  New item is formatted to add to ordered list
let addToList = () => {
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
let removeLast = () => {
	myList.pop();
	document.getElementById('list-content').innerHTML = myList.join("");
}

// Toggle settings menu
$("#settings-toggle").click( () => {
	$("#settings").toggle();
	$("#settings-toggle").text($("#settings-toggle").text() == '+ Settings' ? 'Hide Settings' : '+ Settings');
});

// Print Shopping List
let printList = () => { 
	var divContents = document.getElementById('shoppingList').innerHTML; 
	var printPage = window.open('', '', 'height=500, width=500'); 
	printPage.document.write('<html><head><title>Print Shopping List</title><link rel="stylesheet" type="text/css" href="style.css"></head>');
	printPage.document.write('<body style="background-color: #fff;"><div id="printView">');  
	printPage.document.write(divContents); 
	printPage.document.write('</div></body></html>'); 
	printPage.document.close(); 
	printPage.print(); 
}

let updateSettings = () => {
	
	// Settings - change case
	var caps = document.getElementById('capitalize').checked;
	var upper = document.getElementById('uppercase').checked;
	var lower = document.getElementById('lowercase').checked;

	if (upper == true) {
		document.getElementById('list-content').style.textTransform = "uppercase";
	}

	else if (lower == true) {
		document.getElementById('list-content').style.textTransform = "lowercase";
	}

	else {
		document.getElementById('list-content').style.textTransform = "capitalize";
	}

	// Settings - change font
	var fontIndieFlower = document.getElementById('indieFlowerFont').checked;
	var fontArial = document.getElementById('arialFont').checked;
	var fontVerdana = document.getElementById('verdanaFont').checked;
	
	if (fontArial == true) {
		document.getElementById('list-content').style.fontFamily = "Arial, sans-serif, serif";
	}

	else if (fontVerdana == true) {
		document.getElementById('list-content').style.fontFamily = "Verdana, sans-serif, serif";
	}

	else {
		document.getElementById('list-content').style.fontFamily = "'Indie Flower', cursive";
	}	
}