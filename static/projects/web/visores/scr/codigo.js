var zaragoza = L.latLng(41.6521342, -0.8809428);


	var map = L.map('map', {
			zoomControl:true,
			maxZoom:25,
			layers:[OSM]
		}).fitBounds([[41.8480817,-1.205749],[41.450961,-0.487518]]);


		// Creo la variable del Geogjson

	var uno = L.geoJson(buffer1,{style: estiloBuffer1}).addTo(map);
	var dos = L.geoJson(buffer2, {style: estiloBuffer2}).addTo(map);
	var tres = L.geoJson(aeropuertos, {style: estiloAero}).addTo(map);
	var cuatro = L.geoJson(urbano, {style: estiloUrba}).addTo(map);


		// creo variable del grupo de capas superpuestas (overlayers)

	var capasZaragoza = L.LayerGroup([uno, dos, tres, cuatro]);

		var baselayers = {

				"OSM":OSM,
				"PNOA": PNOA,
				"IGNBase": IGNBase,
				"Topo": toposm
		};

		var overlayers = {


			"Buffer 8km": uno,
			"Buffer 15km": dos,
			"Zonas aeroviarias": tres,
			"Zonas urbanas": cuatro
		};

		L.control.layers(baselayers, overlayers,{collapsed:true}).addTo(map);
		L.control.scale({options: {position: 'bottomleft',maxWidth: 100,metric: true,imperial: false,updateWhenIdle: false}}).addTo(map);

	function buscarLocalizacion(e) {
		   L.marker(e.latlng).addTo(map);
		}
			function errorLocalizacion(e) {
		   alert("No es posible encontrar su ubicación. Es posible que tenga que activar la geolocalización.");
		}
			map.on('locationerror', errorLocalizacion);
			map.on('locationfound', buscarLocalizacion);
			map.locate({setView: false, maxZoom:20}); //setview truer o false para que me geolocalice

// OSMGeocoder plugin (https://gist.github.com/d3noob/7746162)     
        var osmGeocoder = new L.Control.OSMGeocoder({
            collapsed: false,
            position: 'bottomright',
            text: 'Buscar',
			});
        map.addControl(osmGeocoder);

