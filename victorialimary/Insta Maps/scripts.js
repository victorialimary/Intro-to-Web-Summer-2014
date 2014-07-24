console.log('TESTING');


var instagramClientID = '8a700d45c0154195bb95398e9bc8ad40';


$(document).ready(function(){
	var mapContainer = $('#map-container')[0];
	var centreOfToronto = new google.maps.LatLng(43.7, -79.4);
	var instaMap = new google.maps.Map(mapContainer, {
		zoom: 16,
		center: new google.maps.LatLng(43.7,-79.4),
	});
	var openPhotoWindow = false;


	console.log('document is ready');
	searchPhotos(centreOfToronto);
	google.maps.event.addListener(instaMap, 'click', function(event) {
		searchPhotos(event.latLng)
	})

	function searchPhotos(location){

	$.ajax({
		type: 'GET',
		dataType: 'jsonp',
		url: 'https://api.instagram.com/v1/media/search?client_id=' + instagramClientID 
		+ '&lat=' + location.lat()
		+ '&lng=' + location.lng(),
	success: function(response) {
		console.log(response.data);
		response.data.forEach(function(photo) {
			console.log(photo.location);
			
			var photoMarker = new google.maps.Marker({
				position: new google.maps.LatLng(
					photo.location.latitude, 
					photo.location.longitude
			),
			map: instaMap,
		});

			var photoWindowContent = '';
			photoWindowContent += '<img src="' + photo.images.low_resolution.url + '">';
			if (photo.location.name) {
					photoWindowContent += '<p>' + photo.location.name + '</p>';
			}
			var photoWindow = new google.maps.InfoWindow({
				content: photoWindowContent,
			});

			google.maps.event.addListener(photoMarker, 'click', 
				function(event) {
					console.log(event);
					if (openPhotoWindow) {
						openPhotoWindow.close();
				}
				photoWindow.open(instaMap, photoMarker);
				openPhotoWindow = photoWindow;
			});


	});
},
});


	}
});
	console.log('TESTING');