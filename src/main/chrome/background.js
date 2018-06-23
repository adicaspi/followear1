// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.id, {
		file: 'inject.js'
		
	});
});


chrome.runtime.onMessage.addListener(
		function(message, sender, sendResponse)
		{
			console.log(JSON.stringify(message.outfit));
			$.ajax({
			      type: "POST",
			      contentType : 'application/json; charset=utf-8',
			      dataType : 'json',
			      url: "http://localhost:8080/spring-css/addOutfit",
			      data: JSON.stringify(message.outfit), // Note it is important
			      success :function(result) {
			       // do what ever you want with data
			     }
			  });
		
	
		}
		
);