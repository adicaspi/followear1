
(function (){
		
//		const params = {
//	            link: "hi",
//	            user_id:0,
//				product_url:"blabla",
//				product_description:"hi",
//				product_designer:"hiii",
//				product_price:"900"
//	            
//	        }
//
//		const http = new XMLHttpRequest()
//        http.open('POST','http://localhost:8080/tusk/addOutfit',true)
//        http.setRequestHeader('Content-type', 'application/json')
//        http.send(JSON.stringify(params)) // Make sure to stringify
//        http.onload = function() {
//            // Do whatever with response
//            alert(http.responseText)
//        }

	console.log("hiiiii");
	var http = new XMLHttpRequest();
	var url = "http://localhost:8080/tusk/addOutfit";
	var params = "lorem=ipsum&name=binny";
	http.open("POST", url, true);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.onreadystatechange = function() {//Call a function when the state changes.
	    if(http.readyState == 4 && http.status == 200) {
	        alert(http.responseText);
	    }
	}
	http.send(params);
	
	
	
});
