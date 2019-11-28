var map = L.map('map', {
			maxZoom:25,
			layers:[OSM]
		}).fitBounds([[42.5328, -1.1371],[41.7385, 0.5411]]);

var baselayers = {

	"OSM":OSM,
	"PNOA": PNOA
};

L.control.layers(baselayers).addTo(map);
L.control.scale({options: {position: 'bottomleft',maxWidth: 100,metric: true,imperial: false,updateWhenIdle: false}}).addTo(map);

