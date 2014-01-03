$(document).ready(function(e) {
    var onAuthorize = function() {
		updateLoggedIn();
		$("#output").empty();
		
		var card_id = '7BxmX3GG';
	
		Trello.get("cards/"+ card_id +"/actions/",{filter:'updateCard'}, function(actions){
			
			$.each(actions,function(index, action){	
				var start_time = atChangedLists(action,"To Do", "Doing");
				var end_time = atChangedLists(action,"Doing", "Done");
				var difference = timeDifference(start_time, end_time);
				$("#output").append("Card " + action.date + " completed in " + difference + "seconds.<br>");
			});
		});
	};
	
	var atChangedLists = function(action,fromList, toList) {
		
		if(action.data.listBefore && action.data.listAfter && action.data.listBefore.name==fromList && action.data.listAfter.name==toList){
			return action.date
		}else{
			return null;
		}
	};
	
	var timeDifference = function(fromTime, toTime){
		fromTimeDate = new Date(fromTime);
		toTimeDate = new Date(toTime);
		diff=Math.round(fromTimeDate - toTimeDate/1000/60/60/24)
		console.log('dif : '+diff);
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
