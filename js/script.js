$(document).ready(function(e) {
    var onAuthorize = function() {
		updateLoggedIn();
		$("#output").empty();
		
		var card_id = '7BxmX3GG';
		Trello.cards.get(card_id, function(card){
			
			console.log(card);
			$("#output").text('card id:'+card.id);
		});
	
		Trello.get("cards/1mI9G5LR/actions/",{filter:'updateCard'}, function(actions){
			console.log(actions);
			$.each(actions,function(key,value){
				$("#output").append("type : "+value.type+" => date: "+value.date+"<br>");
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
