---
layout: post
title: "Cómo tilear un raster en QGIS 3"
date: 2019-05-18
author: "Joan Cano"
categories: [gis]
---

### Crear los Tiles

Cargamos el ortomosaico que queremos tilear en QGIS, ya sea como nueva capa raster o simplemente arrastramos el ráster a la zona de trabajo.

![](https://joancano.github.io/static/projects/imgPosts/tiles/cargaRaster.PNG)

En la caja de herramientas de procesos escribimos “tiles”, y nos aparecerá una herramienta llamada “gdalAteselas” , la cual abriremos.

![](https://joancano.github.io/static/projects/imgPosts/tiles/gdalAteselas.png)

Los parámetros a introducir son:
+ Capa de entrada: capa_raster_introducida
+ Perfil de corte de teselas: Mercator
+ Niveles de zoom: dependerá de la extensión (por ejemplo: 15-21)
+ Visor web: Leaflet (está traducido como Folleto)
+ Título del mapa: xxxxxxxxx
+ Copyright: Joan

Parámetros avanzados

+ Método: Promedio
+ Sistema de referencia espacial: el mismo que la capa de entrada

Directorio: xxxxxx

Lo que nos va a generar son:

+ una serie de carpetas con los tiles, que corresponden a los zooms que hemos indicado
+ un archivo html que podemos modificar

![](https://joancano.github.io/static/projects/imgPosts/tiles/zooms.png)

El proceso puede durar varias horas. Todo dependerá de la extensión y zoom que queremos de nuestro ortomosaico.

Dejo aquí abajo el código del archivo html que he modificado para el visor de ejemplo. La ruta donde se debe guardar este hmtl es en la carpeta superior a las carpetas de los tiles, como se puede ver en la imagen de arriba.

#### [Ver mapa](https://joancano.github.io/static/projects/visores/tiles)

```
<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
            <title>Calzada Romana</title>

            <!-- Leaflet -->
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" />
            <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"></script>

            <style>
                body { margin:0; padding:0; }
                body, table, tr, td, th, div, h1, h2, input { font-family: "Calibri", "Trebuchet MS", "Ubuntu", Serif; font-size: 11pt; }
                #map { position:absolute; top:0; bottom:0; width:100%; } /* full size */
                .ctl {
                    padding: 2px 10px 2px 10px;
                    background: white;
                    background: rgba(255,255,255,0.9);
                    box-shadow: 0 0 15px rgba(0,0,0,0.2);
                    border-radius: 5px;
                    text-align: right;
                }
                .title {
                    font-size: 18pt;
                    font-weight: bold;
                }
                .src {
                    font-size: 10pt;
                }

            </style>

        </head>
        <body>

        <div id="map"></div>

        <script>
        /* **** Leaflet **** */

        // Base layers
        //  .. OpenStreetMap
        var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', minZoom: 15, maxZoom: 22});

        //  .. CartoDB Positron
        var cartodb = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>', minZoom: 15, maxZoom: 22});

        //  .. PNOA
        var pnoa = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
        	layers: 'OI.OrthoimageCoverage',
        	format: 'image/png',
        	transparent: false,
        	continuousWorld : true,
        	attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
        });

        // Overlay layers (TMS)1
        var lyr = L.tileLayer('./{z}/{x}/{y}.png', {tms: true, opacity: 1, minZoom: 15, maxZoom: 22});

        // Map
        var map = L.map('map', {
            center: [42.04639171261372, -0.7070675159294103],
            zoom: 22,
            minZoom: 15,
            maxZoom: 22,
            layers: [osm]
        });

        var basemaps = {"OpenStreetMap": osm, "Carto": cartodb, "PNOA": pnoa}
        var overlaymaps = {"Layer": lyr}

        // Title
        var title = L.control();
        title.onAdd = function(map) {
            this._div = L.DomUtil.create('div', 'ctl title');
            this.update();
            return this._div;
        };
        title.update = function(props) {
            this._div.innerHTML = "Título";
        };
        title.addTo(map);

        // Note
        var src = 'Copyright &copy; <a href="https://joancano.github.io/">jCano</a>';
        var title = L.control({position: 'bottomleft'});
        title.onAdd = function(map) {
            this._div = L.DomUtil.create('div', 'ctl src');
            this.update();
            return this._div;
        };
        title.update = function(props) {
            this._div.innerHTML = src;
        };
        title.addTo(map);


        // Add base layers
        L.control.layers(basemaps, overlaymaps, {collapsed: false}).addTo(map);

        // Fit to overlay bounds (SW and NE points with (lat, lon))
        map.fitBounds([[42.02922620714568, -0.682901971184147], [42.063557218081755, -0.7312330606746736]]);

        </script>

        </body>
        </html>

```  
