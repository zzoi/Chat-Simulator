var MessagingSim = function(chat) {
	var _this = this;
	var messageInterval;
	var index = 0;
	
	var messages = [
		{
		"name" : "Zoey",
		"text" : "Hello",
		"imageUrl" : "images/zoey.jpg"
		},
		{
		"name" : "Miriam",
		"text" : "Hi!",
		"imageUrl" : "images/miriam.jpg"
		},
		{
		"name" : "Zoey",
		"text" : "How are you?",
		"imageUrl" : "images/zoey.jpg"
		},
		{
		"name" : "Paul",
		"text" : "Hi guys!",
		"imageUrl" : "images/paul.jpg"
		},
		{
		"name" : "Miriam",
		"text" : "Great! Having lunch...",
		"imageUrl" : "images/miriam.jpg"
		},
		{
		"name" : "Zoey",
		"text" : "Do you want to join us?",
		"imageUrl" : "images/zoey.jpg"
		},
		{
		"name" : "Paul",
		"text" : "Of course, where are you?",
		"imageUrl" : "images/paul.jpg"
		},
		{
		"name" : "Miriam",
		"text" : "We are at JavaBeans cafe!",
		"imageUrl" : "images/miriam.jpg"
		},
		{
		"name" : "Paul",
		"text" : "Ok! I'll see you there in a bit.",
		"imageUrl" : "images/paul.jpg"
		},
		{
		"name" : "Zoey",
		"text" : "Nice!",
		"imageUrl" : "images/zoey.jpg"
		},
		{
		"name" : "Paul",
		"text" : "I don't see you guys...",
		"imageUrl" : "images/paul.jpg"
		},
		{
		"name" : "Paul",
		"text" : "Are you in the cafe?",
		"imageUrl" : "images/paul.jpg"
		},
		{
		"name" : "Miriam",
		"text" : "Yes! outside in the first table.",
		"imageUrl" : "images/miriam.jpg"
		},
		
	];
	
	function init() {
		sendMessage();
		messageInterval = setInterval(sendMessage, 1200);
	}
	
	function sendMessage() {
		if (index < messages.length) {
			setTimeout(function(msg) {
				chat.displayMsg(msg);
			}, Math.random() * 1000, messages[index]);
			index += 1;
		} else {
			clearInterval(messageInterval);
		}
	}
	
	init();
};