jQuery(document).ready(function($){
	var ballResponses = ["It is certain","It is decidedly so","Without a doubt","Yes, definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Signs point to yes","Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"]
	$("#send").click( function() {
		var objDiv = document.getElementById("textbox");
		var typed = $("#chat")
		var chatbox = $("#textbox")
		var htmlToAdd = "<div class='card light-blue col s6 offset-s6'><div class='card-content white-text'><p>"+typed.val()+"</p></div></div>"
		chatbox.append(htmlToAdd)
		typed.val("")
		var randomNum = Math.floor(Math.random() * 20)

		setTimeout(function(){
			chatbox.append("<div class='card grey col s6'><div class='card-content white-text'><p>"+ballResponses[randomNum]+"</p></div></div>")
			
			objDiv.scrollTop = objDiv.scrollHeight;
		},1000);
		objDiv.scrollTop = objDiv.scrollHeight;
	});


});
