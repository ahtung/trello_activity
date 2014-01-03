$(document).ready(function(e) {
    var onAuthorize = function() {
		updateLoggedIn();
		$("#output").empty();
		
		Trello.cards.get("9AvXrTfo", function(card){
			
			console.log(card);
			$("#output").text('card id:'+card.id);
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
		})
	});
		
	$("#disconnect").click(logout);
});