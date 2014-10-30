$(document).ready(function(){
	$(document).bind('deviceready', function(){
		var output = $('#output');
	
		$.ajax({
			url: 'http://trolleychecker.com/ean_json.php',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
			success: function(data, status){
				$.each(data, function(i,item){ 
					var landmark = '<h1>'+item.ean+'</h1>'
					+ '<p>'+item.description+'<br></p>';
				
					output.append(landmark);
				});
			},
			error: function(){
			   output.text('There was an error loading the data.');
			}
		});
	});
});