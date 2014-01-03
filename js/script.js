$(document).ready(function(e) {
    var onAuthorize = function() {
		updateLoggedIn();
		$("#output").empty();
		
		Trello.cards.get("1mI9G5LR", function(card){
			
			console.log(card);
			$("#output").text('card id:'+card.id);
		});
	
		Trello.get("cards/1mI9G5LR/actions?type=updateCard", function(card){
			console.log(card);
			$.each(card,function(key,value){
				$("#output").append("type : "+value.type+" => date:"+value.date+"<br>");
			});
		});
	};
	
	var updateLoggedIn = function() {
		var isLoggedIn = Trello.authorized();
		$("#loggedout").toggle(!isLoggedIn);
		$("#loggedin").toggle(isLoggedIn);        
	};
		
	var logout = function() {
		Trello.deauthorize();
		updateLoggedIn();
	};
							  
	Trello.authorize({
		interactive:false,
		success: onAuthorize
	});
	
	$("#connectLink").click(function(){
		Trello.authorize({
			type: "popup",
			success: onAuthorize
		});
		console.log('connect link clicked');
	});
		
	$("#disconnect").click(logout);
});