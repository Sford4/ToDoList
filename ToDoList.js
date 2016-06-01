//when enter is clicked, value in listItem creates an unordered list with a list item
function createItem() {
	var textBox = $('#listItem');
	var userInput = textBox.val();
	var userArray = userInput.split(",");
	var ulElement = $('#theList');
	if (!userInput) {
		alert("Oh come on.  You must have SOMETHING to do!");
		return;
	}
	for (i = 0; i < userArray.length; i++) { 
		var listPiece = $('<li>');
		listPiece.click(function(){
			$(this).toggleClass("makeOpaque");
		});
	    listPiece.text(userArray[i]);
	    ulElement.append(listPiece);
	};
	listItem.value = '';
}

$("#listItem").keyup(function(event){
    if(event.keyCode == 13){
        createItem();
    }
});

$("#submit").click(function() {
	createItem();
});

