//49.989221, долготе: 36.2320075
var map = null;
var ourCoords =  {
	latitude: 55.759169,
	longitude: 37.627222
};


window.onload = showMap;


function showMap() {

	var googleLatAndLong = new google.maps.LatLng(49.9900113, 
												  36.2320075);
	var mapOptions = {
		zoom: 16,
		center: googleLatAndLong,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	var mapDiv = document.getElementById("map");
	map = new google.maps.Map(mapDiv, mapOptions);

	// add the user marker
	var title = "Здесь мэр Харькова";
	var content = "Координаты: " + 49.9900113 + ", " + 36.2320075;
	addMarker(map, googleLatAndLong, title, content);

}

function addMarker(map, latlong, title, content) {
	var markerOptions = {
		position: latlong,
		map: map,
		title: title,
		clickable: true
	};
	var marker = new google.maps.Marker(markerOptions);

	var infoWindowOptions = {
		content: content,
		position: latlong
	};

	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(map);
	});
}


function displayError(error) {
	var errorTypes = {
		0: "Неизвестная ошибка",
		1: "Доступ запрещен",
		2: "Определение невозможно",
		3: "Время запроса истекло"
	};
	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + " " + error.message;
	}
	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
}

