$(document).ready(function(e) {
    var onAuthorize = function() {
		updateLoggedIn();
		$("#output").empty();
		
		var card_id = '7BxmX3GG';
	
		Trello.get("cards/"+ card_id +"/actions/",{filter:'updateCard'}, function(actions){
			
			$.each(actions,function(index, action){	
				if(atChangedLists(action,"To Do", "Doing")) {
					$("#output").append("-> : "+ action.type + " => date: " + action.date + "<br>");
				}
				
				if(atChangedLists(action,"Doing", "Done")) {
					$("#output").append("-> : "+ action.type + " => date: " + action.date + "<br>");
				}
			});
		});
	};
	
	var atChangedLists = function(action,fromList, toList) {
		
		console.log(action);
		if(action.data.listBefore && action.data.listAfter && action.data.listBefore.name==fromList && action.data.listAfter==toList){
			console.log(action.data.listAfter);
			return true;
		}else{
			return false;
		}
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
