var options = {
	type: 'GET',
	dataType: 'jsonp',
	url: 'https://api.instagram.com/v1/tags/darkto/media/recent?client_id=0d9085d9f9c249faa9abc68f8b2e8ed5',
	success: successCallback,
}

function successCallback(response) {
	var photosElement = document.getElementById('photos');
	console.log(response);
	response.data.forEach(function(photo) {
		console.log(photo);
		var html = '';
		html += '<a class="col-md-3 photo" href="' + photo.link + '">';
		html += '<img src="';
		html += photo.images.standard_resolution.url;
		html += '">';
		html += '</a>';
		photosElement.innerHTML += html;
	});
}

$.ajax(options);