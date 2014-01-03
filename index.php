<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Digital Services – Philips</title>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="https://api.trello.com/1/client.js?key=fe590d6d0ce9a6826d52b0207afc1a98"></script>
<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript">
   


</script>

</head>
<body>
<div id="wrap">
<div id="loggedout">
    <a id="connectLink" href="#">Connect To Trello</a>
</div>

<div id="loggedin">
    <div id="header">
        Logged in to as <span id="fullName"></span> 
        <a id="disconnect" href="#">Log Out</a>
    </div>
    
    <div id="output"></div>
    
    http GET "https://api.trello.com/1/boards/4d5ea62fd76aa1136000000c/actions" "since==Apr 1 2013 EDT" "before==May 1 2013 EDT" "limit==1000" "filter==commentCard"

</div>   
</div>
</body>
</html>