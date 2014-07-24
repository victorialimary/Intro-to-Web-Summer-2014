var wonders = [
	{title:'Great Pyramid of Giza', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/300px-Kheops-Pyramid.jpg'},
	{title:'Hanging Gardens of Babylon', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hanging_Gardens_of_Babylon.jpg/350px-Hanging_Gardens_of_Babylon.jpg'},
	{title:'Temple of Artemis', img: 'http://upload.wikimedia.org/wikipedia/commons/1/1d/Miniaturk_009.jpg'},
	{title:'Statue of Zeus at Olympus', img: 'http://www.unmuseum.org/zeus_statue_std.jpg'},
	{title:'Mausoleum at Halicarnassus', img: 'http://img4.wikia.nocookie.net/__cb20140205230447/civilization/images/0/03/Mausoleum_of_halicarnassus.jpg'},
	{title:'Colossus of Rhodes', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Colosse_de_Rhodes_%28Barclay%29.jpg/170px-Colosse_de_Rhodes_%28Barclay%29.jpg'},
	{title:'Lighthouse of Alexandria', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lighthouse_-_Thiersch.gif/800px-Lighthouse_-_Thiersch.gif'},
];

wonders.forEach(function(wonder) {
	document.body.innerHTML += '<h2>' 
		+ wonder.title 
		+ '</h2>'
		+ '<img src= "'
		+ wonder.img
		+ '">';
});
