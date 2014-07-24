var instagramClientId = '0d9085d9f9c249faa9abc68f8b2e8ed5'; 

$(document).ready(function() {
	var mapContainer = $('#map-container')[0];
	var centreOfToronto = new google.maps.LatLng(43.7, -79.4);
	var instaMap = new google.maps.Map(mapContainer, {
		zoom: 12,
		center: centreOfToronto,
	});
	var openPhotoWindow = false;

	google.maps.event.addListener(instaMap, 'click', function(event) {
		console.log(event);
		searchPhotos(event.latLng);
	});

	console.log('document is ready');
	searchPhotos(centreOfToronto);

	function searchPhotos(location) {
		// do stuff;
		$.ajax({
			type: 'GET',
			dataType: 'jsonp',
			url: 'https://api.instagram.com/v1/media/search?client_id='
				+ instagramClientId
				+ '&lat=' + location.lat()
				+ '&lng=' + location.lng(),
			success: function(response) {
				response.data.forEach(function(photo) {
					console.log(photo);
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

					google.maps.event.addListener(
						photoMarker,
						'click',
						function(event) {
							console.log(event);
							if (openPhotoWindow) {
								openPhotoWindow.close();
							}
							photoWindow.open(instaMap, photoMarker);
							instaMap.setCenter(event.latLng);
							openPhotoWindow = photoWindow;
						}
					);


					})

				});
			},
		});
	}
});




console.log('TESTING');
