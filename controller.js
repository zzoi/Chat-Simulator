document.body.onload = function() {
	var chatRoom = new Chat();
	var owner = "Zoey";
	chatRoom.setOwner(owner);
	var chatSimulator = new MessagingSim(chatRoom);
	document.forms["msgForm"].onsubmit = function(event) {
		chatRoom.displayMsg({ 
			name:owner, 
			text: document.forms["msgForm"].message.value,
			imageUrl: "images/zoey.jpg"
		});
		document.forms["msgForm"].message.value = "";
		event.preventDefault();
	}
}

