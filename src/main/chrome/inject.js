


function generateOutfit (user_id,image_src,image_description,price,designer,website,href){
	var outfit = {user_id: user_id, image_src:image_src, image_description:image_description, designer:designer, price:price, website:website, href:href};
	return outfit;
	
}

function generateFollowearDiv(selector,outfit){
	var followear_div = document.createElement('div');
    followear_div.className = "followear";
    followear_div.id = "flwr";
  	var button = document.createElement('button');
  	var text = document.createTextNode("followear");
	button.appendChild(text);
	followear_div.appendChild(button);
	$(selector).append(followear_div);
	var fl = $(selector).find("#flwr");

    
	var cs= getComputedStyle($("#flwr")[0]);
	for (var i=0 ; i<cs.length; i++) {
      	fl.css(cs[i], 'inherit');
    }
  	$(button).click(function(){
			alert(outfit.price);
			alert(outfit.designer);
			
			chrome.runtime.sendMessage({outfit:outfit});
   	});
	
	
	
}

function netaporter(selector){
	
	var i;
	 (selector).each(function(i){
			
			
	    	var user_id = 0; 
	        var href = $(this).find("div.product-image a").attr('href');
	        var price = $(this).find("span.price").text();
	        var designer = $(this).find("span.designer").text();
	        price = price.trim();
	        designer = designer.trim();
	        var description = $(this).find("div.description a").attr('title');
	        var website = window.location.hostname.toString();;
	        var src = $(this).find("img").attr('src');
	        
	        var outfit = generateOutfit (user_id,src,description,price,designer,website,href);
	        generateFollowearDiv($(this),outfit);
      
	 });
	
}




function matchesfashion(selector){
	
	var i;
	 (selector).each(function(i){
			
			
	    	var user_id = 0; 
	    	var website = window.location.hostname.toString();
	        var href = $(this).find("div.lister__item__inner a").attr('href');
	    	var src = $(this).find("img.lazy").attr('src');
	        var description = $(this).find("div.lister__item__details").text();
	        var price = $(this).find("span.lister__item__price-full").text();
	        var designer = $(this).find("div.lister__item__title").text();
	        
	        
	        var outfit = generateOutfit (user_id,src,description,price,designer,website,href);
	        generateFollowearDiv($(this),outfit);
      
	 });
	
}





function asos(selector){
	
	(selector).each(function(){
		
		
    	var user_id = 0; 
    	var href = $(this).find("a._3x-5VWa").attr('href');
    	var description = $("a._3x-5VWa").attr('aria-label');
    	var price = $(this).find("._342BXW_").text();
        var designer = "asos";
        var website = window.location.hostname.toString();;
        var src = $(this).find('img').attr('src');
        
        var outfit = generateOutfit (user_id,src,description,price,designer,website,href); 
        generateFollowearDiv($(this),outfit);
	});

	
	
	
	
}
	









(function() {
	 
  
   switch(window.location.hostname){
   		
   		case "www.net-a-porter.com":
   			
   			selector = $('ul.products').find('li');  
   			netaporter(selector);
   			
   			break;
   		case "www.asos.com":
   			
   			selector = $('._2oHs74P'); 
   			asos(selector);
   			break;
   		case "www.matchesfashion.com":
   			
   			selector = $('ul.lister__wrapper').find('li.lister__item');
   			matchesfashion(selector);
   			
   			break;
   
   
   }

   
})();
   
//   (li).each(function(i){
//	
//	
//    	var user_id = 0; 
//        var url = $(this).find("div.product-image a").attr('href');
//        var price = $(this).find("span.price").text();
//        var designer = $(this).find("span.designer").text();
//        var description = $(this).find("div.description a").attr('title');
//        
//        var outfit = {user_id: user_id, image_url:url, image_description:description, designer:designer, price:price};       
//        
      /*  var followear_div = document.createElement('div');
        followear_div.className = "followear";
        followear_div.id = "flwr";
    	var button = document.createElement('button');
    	var text = document.createTextNode("followear");
      	button.appendChild(text);
      	followear_div.appendChild(button);
        $(this).append(followear_div);
        var fl = $(this).find("#flwr");
  
      
        var cs= getComputedStyle($("#flwr")[0]);
        for (var i=0 ; i<cs.length; i++) {
        	fl.css(cs[i], 'inherit');
        }
    	$(button).click(function(){
			alert(price);
			chrome.runtime.sendMessage({outfit:outfit});
     	});*/
    	
    	
//    });
     
     
 	
 	
          
    	
    	

     


		
//				const params = {
//			            link: link,
//			            user_id:0,
//						product_url:"blabla",
//						product_description:"hi",
//						product_designer:"hiii",
//						product_price:"900"
//			            
//			        }
//	
//				const http = new XMLHttpRequest()
//		        http.open('POST','http://localhost:8080/tusk/addOutfit',true)
//		        http.setRequestHeader('Content-type', 'application/json')
//		        http.send(JSON.stringify(params)) // Make sure to stringify
//		        http.onload = function() {
//		            // Do whatever with response
//		            alert(http.responseText)
//		        }

//			var user_id = 0;
//			var product_url = link;
//			var product_description = "hi";
//			var product_designer = "hiii";
//			var product_price = "900";
//			$.post("http://localhost:8080/tusk/addOutfit",{
//					user_id : user_id,
//					product_url: product_url,
//					product_description: product_description,
//					product_designer: product_designer,
//					product_price: product_price
//				});
		
        
        
      /*  $(button).click(function() {
   			alert(link);
	 	});*/
       
        



// 
  // var a = div_image.getElementsByTagName("a")[0];
   //		alert(a.href);