$(document).ready(function(e) {
    var onAuthorize = function() {
		
		updateLoggedIn();
		
		$("#output").empty();
		
		var card_id = '7BxmX3GG';
	
		Trello.get("cards/"+ card_id +"/actions/",{filter:'updateCard'}, function(actions){
			var difference = 0;
			var start_time = atChangedLists(actions, "To Do", "Doing");
			var end_time = atChangedLists(actions, "Doing", "Done");
			difference = timeDifference(start_time, end_time);
			$("#output").append("Card " + card_id + " completed in " + difference + " seconds.<br>");
		});
	};
	
	var atChangedLists = function(actions,fromList, toList) {
		$.each(actions,function(index, action){	
			if(action.data.listBefore && action.data.listAfter && action.data.listBefore.name==fromList && action.data.listAfter.name==toList){
				return action.date
			}
		});
	};
	
	var timeDifference = function(fromTime, toTime){
		fromTimeDate = new Date(fromTime);
		toTimeDate = new Date(toTime);
		var timeDiff = Math.abs(toTimeDate.getTime() - fromTimeDate.getTime());
		var diffDays = Math.ceil(timeDiff / (1000));
		return diffDays;
	}
	
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
