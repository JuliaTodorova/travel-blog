$(document).ready(function(){
	$(".show").click(function(){
		$("#main-nav ul").toggle();
	});

	$(".show").click(function(){
		$("#content,#content-photos").toggle();
	});
});
// Google Map
var cities = [
	new City("Victoria",48.4222,-123.3657),
	new City("Vancouver",49.2500,-123.1000),
	new City("Whistler",50.1208,-122.9544),
	new City("Kelowna",49.8801,-119.4436),
	new City("Tofino",49.1439,-125.8917),
	new City("Cortes Island",50.1167,-124.9667),
	new City("Salt Spring Island",48.8333,-123.5000),
	new City("Calgary",51.0500,-114.0667),
	new City("Banff",51.1781,-115.5719),
	new City("Kananaskis",50.7884,-114.8147),
	new City("Seattle",47.6097,-122.3331),
	new City("San Francisco",37.7833,-122.4167),
	new City("Sequoia National Park",36.5647,-118.7734),
	new City("Los Angeles",34.0500,-118.2500),
	new City("New York",40.7127,-74.0059),
	new City("Cancun",21.1606,-86.8475),
	new City("Playa Del Carmen",20.6275,-87.0811),
	new City("Tulum",20.2147,-87.4289),
	new City("Cartagena",10.4000,-75.5000),
	new City("Halkidiki",40.3333,23.5000),
	new City("Thessaloniki",40.6500,22.9000),
	new City("Rome",41.9000,12.5000),
	new City("Florence",43.7833,11.2500),
	new City("Pisa",43.7167,10.4000),
	new City("Venice",45.4375,12.3358),
	new City("Milan",45.4667,9.1833),
	new City("Munich",48.1333,11.5667),	
	new City("Frankfurt",50.1167,8.6833),	
	new City("London",51.5072,0.1275),	
	new City("Paris",48.8567,2.3508),	
	new City("Amsterdam",52.3667,4.9000),	
	new City("Sofia Bulgaria",42.7000,23.3333),
	new City("Veliko Tarnovo",43.0833,25.6500),
	new City("Sozopol",42.4167,27.7000),
	new City("Kathmandu",27.7000,85.3333),
	new City("Bhaktapur",27.6722,85.4278),
	new City("Nagarkot",27.7236,85.5247),
	new City("Agra",27.1800,78.0200),
	new City("Ranthambore National Park",26.0173,76.5026),
	new City("Jodhpur",26.2800,73.0200),
	new City("Jaisalmer",26.9133,70.9139),
	new City("New Delhi",28.6139,77.2089),
]
// Marker Fun

var map;

function initialize(location)
{
	console.log(location);

	var mapOptions = {
		zoom: 2,
		center: new google.maps.LatLng(28,0)
	};

	 map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions); 

	$(cities).each(function(){
	 	addPoint(this.lat, this.lng, map);
	 });
}

function City(name,lat,lng){
	this.name = name;
	this.lat = lat;
	this.lng = lng;
}

function addPoint(lat, lng, map){
	var point = new google.maps.LatLng(lat,lng)
	 var marker = new google.maps.Marker({
	 	position:point,
	 	map:map,
	 })	
}
 google.maps.event.addDomListener(window,'load', initialize);


// Dialog Boxes

$(document).ready(function(){
	$(".st-content p a").each(function(){
		$(this).click(function(){
			$("#dialog").dialog('open');
			
			return false
		});
	});
});	
