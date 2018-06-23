<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>add photos to DB </title>
<style>
* {
    box-sizing: border-box;
}

#imagesContainer {
    float: left;
    width: 33.33%;
    padding: 5px;
	display: flex;
}

/* Clearfix (clear floats) */
#imagesContainer::after {
    content: "";
    clear: both;
    display: table;
}

.demo {
    float: left;
    width: 33.33%;
    padding: 5px;
}

.demo ::after {
    content: "";
    clear: both;
    display: table;
}

/* Clearfix (clear floats) */


div img src{display: inline-block;}
</style>
</head>
<body>
 <form action="addPhotos" method="get">
<script>

var i =0;
$(document).ready(function(){
    $("button").click(function(){
        $.get("http://localhost:8080/tusk/addPhoto", function(data, status){
        	images = data
        	function createImages(item,index){
        		
        		var product_li = document.createElement('li');
        		var product_div = document.createElement('div');
        		var desc_div = document.createElement('div');
        		var desc_span = document.createElement('span');
        		var img = document.createElement('img');
        		var img_link = document.createElement('a');
        		var desc = document.createTextNode(item.image_description);
        		var save_btn = document.createElement('button');
        		var btn_desc = document.createTextNode("save");
        		save_btn.appendChild(btn_desc);
        		img.setAttribute("src",item.image_url);
        		img.setAttribute("id",i);
        		save_btn.setAttribute("id",i);
        		desc_span.setAttribute("id",i);
        		i = i+1;
        		img_link.setAttribute("href",item.image_url);
        		product_div.className = ("product");
        		desc_div.className = ("description");
        		product_li.appendChild(product_div);
        		product_li.appendChild(desc_div);
           		product_div.appendChild(img_link);
           		img_link.appendChild(img);
           		desc_span.appendChild(desc);
           		desc_div.appendChild(desc_span);
           		product_div.appendChild(save_btn);
				           		        	 	          	
           		product_li.setAttribute("class","demo");
        		document.getElementById('imagesContainer').appendChild(product_li);
        		//assiging eventlistener to "save" button
        		//save_btn.addEventListener("click",saveFunction); 

				

        		
        		$(save_btn).click(function(event){
        			alert("your photo has been saved");
        			var user_id = 0;
        			var product_url = item.image_url;
        			var product_description = item.image_description;
        			var product_designer = item.designer;
        			var product_price = item.price;
        			$.post("http://localhost:8080/tusk/addOutfit",{
        					user_id : user_id,
        					product_url: product_url,
        					product_description: product_description,
        					product_designer: product_designer,
        					product_price: product_price
        				});
        		});
        			/* ,function (data) {
        				var json = JSON.parse(data);
        				
        			}).done(function(){
        				
        			}).fail(function(xhr,textStatus,errorThrown){
        				
        			}).complete(function(){
        				
        			
        				$(save_btn).prop("disabled",false);	
        			
        			});
        		 */
        	
        	
        		
        	}
        	images.forEach(createImages)}); 
        
    });
});



								
</script>

</form>


<div class="row">
	<div class = "column">
 		<div id="imagesContainer"></div> 
		<button>Send an HTTP GET request to a page and get the result back</button>
	</div>
</div>


</body>
</html>