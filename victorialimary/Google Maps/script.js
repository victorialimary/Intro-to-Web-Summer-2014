
$(document).ready(function() {

	navigator.geolocation.getCurrentPosition(function(position) {
		var ourLatLng = new google.maps.LatLng(
			position.coords.latitude,
			position.coords.longitude
			);
	
	var element = $('#map-canvas')[0];
	var fullscreenMap = new google.maps.Map(element,{
		center: muskokaLatLng,
		zoom: 15,
	}); 


	new google.maps.Marker({
		position: muskokaLatLng,
		map: fullscreenMap,
		});
	});

	$('form').submit(function(){ 
		// THE ABOVE LINE CONNECTS HTML w Javascript
		var latitude = $(this).find('[name="latitude"]').val();
		var longitude = $(this).find('[name="longitude"]').val();

	console.log(latitude,longitude);

	return false;
	});
});






// heading = direction

// 2 inputs on screen 
// if user types in lat and lon and hits submit 
// 	map will center on location and drop marker 