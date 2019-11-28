var OSM = 	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Â© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
	maxZoom: 25,
	opacity: 0.8
	});

var osmGrey = 	L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
	attribution: '© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
	maxZoom: 25,
	opacity: 0.5
	});
	
var PNOA = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
	layers: 'OI.OrthoimageCoverage',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
});

// Cartografía Catastro

var Catastro = L.tileLayer.wms('http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx', {
	layers: 'Catastro',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: ' <a href="http://www.catastro.meh.es/" target="_blank">Dirección General del Catastro</a>'
});

// Mapa base de España 
var IGNBase = L.tileLayer.wms('http://www.ign.es/wms-inspire/ign-base', {
	layers: 'IGNBaseTodo',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
});
var toposm = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 25,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
