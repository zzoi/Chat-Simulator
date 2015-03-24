var Chat = function() {
	var _this = this;
	var owner = "";
	var chatRoom = document.getElementById("chatroom");
	var chatHeight = chatRoom.offsetHeight;
	var padding = 5;
	
	function getTimeStamp() {
    	var d = new Date();
    	var h = d.getHours();
    	var m = "0" + d.getMinutes();
    	var ampm = (h >= 12) ? "PM" : "AM";
    	h -= (h > 12) ? 12 : 0;
    	h = (h === 0) ? 12 : h;
    	
    	return h + ":" + m.substring(m.length - 2) + " " + ampm;
	}
	
	_this.displayMsg = function(msg) {
		
		var li = document.createElement("li");
		li.className = (msg.name === owner)? "self" : "other";
		
		var divPic = document.createElement("div");
		divPic.className = "pic";
		
		var divDate = document.createElement("div");
		divDate.className = "date";
		divDate.innerHTML = getTimeStamp();
		
		if(msg.imageUrl) {
			divPic.style.backgroundImage = "url('" + msg.imageUrl + "')";
		}
		
		var divMsg = document.createElement("div");
		divMsg.className = "msg";
		divMsg.innerHTML =  ((msg.name === owner) ? "Me" : msg.name) + ":<br>" + msg.text;
		
		li.appendChild(divDate);
		li.appendChild(divPic);
		li.appendChild(divMsg);
		
		chatRoom.appendChild(li);
		
		var size = chatRoom.children.length * 92;
		chatRoom.scrollTop = (size > chatHeight - padding) ? size + padding - chatHeight : 0;
	};
	
	_this.setOwner = function(ownerName) {
		owner = ownerName;
	};
	
	return _this;
}
