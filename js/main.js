$(document).ready(function(){
	$(".show").click(function(){
		$("#main-nav ul").toggle();
	});

	$(".show").click(function(){
		$("#content").toggle();
	});
});
// Google Map

var map;

function initialize(location)
{
	console.log(location);

	var mapOptions = {
		zoom: 2,
		center: new google.maps.LatLng(0,0)
	};

	 map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

$(document).ready(function(){
		navigator.geolocation.getCurrentPosition(initialize);
});