var popup = L.popup();
// Evento click en el mapa
function onMapClick(e) {
	var lat = e.latlng.lat;
	var lon = e.latlng.lng;
	//alert (lat + ' ' + lon);
	var reversegeocode = 'http://nominatim.openstreetmap.org/reverse?format=json&lat='+lat+'&lon='+lon+'&zoom=18&addressdetails=1'; //alert(reversegeocode);
  
    $.getJSON(reversegeocode, function(data) {	
		var display_name = data.display_name;	//alert(display_name ); 
		popup
			.setLatLng(e.latlng)
			.setContent(display_name)
			.openOn(map);
	}); 
}	
	
map.on('click', onMapClick);
