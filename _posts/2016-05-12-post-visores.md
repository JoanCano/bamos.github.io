---
layout: post
title: Creando visores con Leaflet
date: 2016-05-12
author: Joan Cano
categories: [leaflet]
---
## Web mapping

Este es uno de los primeros posts que escribí cuando empecé a aprender web mapping con Leaflet.
A continuación dejo algunos visores que hice como prueba para aprender a montarlos. No he revisado el código desde hace años por lo que seguramente habrán muchas cosas a mejorar. Si vas a utilizar el código, te recomiendo que lo revises.

### Visor 1.  <a href='javascript: none' onclick='$("#abs_visor1").toggle()'>Mapa simple</a> <br>
  
   <div id="abs_visor1" style="text-align: justify; display: none" markdown="1">
   Se trata de un visor sencillo. El mapa está centrado en Zaragoza. El objetivo es mostrar la localización de algún lugar que se quiera resaltar.
   [Visor Mapa simple](https://joancano.github.io/static/projects/web/visores/zaragoza.html) 
   </div>
   

### [Visor 2. Zonas de vuelo con dron (Zaragoza)](https://joancano.github.io/static/projects/web/visores/rpa.html)

Este visor lo hice cuando empecé como piloto de drones. Me encontré con el problema de que la cartografía que existía respecto a las zonas aptas para el vuelo eran de pago y en papel. Por suerte había un archivo kml que circulaba por ahí con las zonas de vuelo: [puedes descargarlo de gisandbeers](http://www.gisandbeers.com/radios-y-zonas-de-vuelo-para-drones).

De manera que hice el visor basándome en las áreas del kml y con un poco de <a href= "http://noticias.juridicas.com/base_datos/Fiscal/537921-l-18-2014-de-15-oct-medidas-urgentes-para-el-crecimiento-la-competitividad.html#t2c1s6lectura">legislación. </a>

+ Las áreas de influencia, representan las zonas donde no está permitido volar en Zaragoza
+ Te permite geolocalizarte con el móvil.

Actualmente el visor está desactualizado puesto que hay una nueva ley vigente. Además, AESA ya ha creado un visor web para poder comprobar donde se va a operar o volar recreativamente.


### [Visor 3. MBTiles](https://joancano.github.io/static/projects/web/visores/mbtiles/mbpolop.html)

El siguiente visor tiene como mapa base un <a href="http://wiki.openstreetmap.org/wiki/MBTiles">MBTiles</a>. Este tipo de formato permite almacenar un mosaicado de imágenes en un solo archivo, como una base de datos SQLite. Me gusta utilizar MBTiles, por que te permite trabajar sin conexión a internet y se mueve fino fino, además del poco espacio que ocupan las teselas.


### [Visor 4. Window Slider](https://joancano.github.io/static/projects/web/visores/ventanas/windows.html)

Puede surgir la necesidad de comparar distintas cartografías. Ello es muy sencillo en GIS de escritorio, pero cuando además quiere compartir con muchos usuarios este tipo de visores me parecen perfectos. En este caso se comparan servicios WMS multitemporal de mi pueblo.


### [Visor 5. Geo Photos con Flickr](https://joancano.github.io/static/projects/web/visores/photo/photos.html)

Durante mi máster, tuvimos una salida de campo en la que identificamos diferentes tipos de cubiertas y vegetación. La captura de fotos en campo ayuda a recordar que tipos de cubiertas y especies son las que componen el paisaje, pero sobretodo la localización junto a las fotofrafías ayudaron mucho en la búsqueda de píxeles que puedan ser útiles para la clasificación supervisada.

La API de Flickr nos permite almacenar y geolocalizar las fotos e interactuar con ellas mediante Leaflet. Si ya tenemos las fotos geolocalizadas (tomadas con móvil o cámara) podemos geolocalizarlas directamente, y si no podemos geolocalizarlas con Flickr o un software específico; en mi caso utilizo [Digikam](https://www.digikam.org/)


### [Visor 6. Time and checkbox](https://joancano.github.io/static/projects/web/visores/visor_historia/)

Este visor es más elaborado. Se trata de un visor que representa la ocupación francesa en Valencia durante los años 1812-13.


### Visor 7. Time and Slider

Se trata del mismo visor pero con un slider para mover según la fecha

+ [Time and Slider 1](https://joancano.github.io/static/projects/web/visores/visor_historia/versiones/v6/oneSlider.html)
+ [Time and Slider 2](https://joancano.github.io/static/projects/web/visores/visor_historia/versiones/v5/index.html)

### [Visor 8. Raster tiles](https://joancano.github.io/static/projects/web/visores/ruinas_Belchite/index.html)

Es un visor web simple, generado mediante la herramienta gdalAteselas de QGIS 3. Este es el enlace al post donde explico como realizarlo:
[https://joancano.github.io/gis/2019/05/18/tiles_qgis.html](https://joancano.github.io/gis/2019/05/18/tiles_qgis.html)
