var instagramURL = '';
var loading = false;

// var options = {
// 	type: 'GET',
// 	dataType: 'jsonp',
// 	url: 'https://api.instagram.com/v1/tags/darkto/media/recent?client_id=0d9085d9f9c249faa9abc68f8b2e8ed5',
// 	success: successCallback,
// }

function successCallback(response) {
	console.log('loaded');
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

	instagramURL = response.pagination.next_url;
	loading = false;
}


$(document).ready(function() {
	instagramURL = 'https://api.instagram.com/v1/tags/puppy/media/recent?client_id=0d9085d9f9c249faa9abc68f8b2e8ed5';
	$('#next-page').click(function(){
		console.log(loading);
		if (loading) return;
		loading = true;

		var options = {
		type: 'GET',
		dataType: 'jsonp',
		url: instagramURL,
		success: successCallback,
		}

		$.ajax(options);
		return false;
	});
	$('#next-page').trigger('click');
});

$(window).scroll(function(){
	var windowY = window.innerHeight + document.body.scrollTop; 
	var contentY = $('#photos').height() + $('#photos').offset().top;	
	var threshold = 100;
	if (windowY > contentY - threshold) {
		$('#next-page').trigger('click');
	}

		
});