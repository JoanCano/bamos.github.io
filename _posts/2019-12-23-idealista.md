---
layout: post
title:  "Extracción y uso de datos de Idealista"
date:   2019-12-23
categories: [linux, OSM, programacion,gis]
---

La web de [Idealista](https://www.idealista.com/) ofrece un servicio gratuito para la descarga de sus datos.
Por ello en este post quiero explicar cómo los he podido descargar y cómo utilizarlos para buscar piso a partir de
una posición (X, Y), la cual será nuestro lugar de trabajo.

En primer lugar debermos registrarnos en su servicio:

+ [API IDEALISTA](https://developers.idealista.com/access-request)

Una vez proporcionan las claves de acceso (Apikey, Secret), ya podremos realizar llamadas a la API para obtener las viviendas ubicadas principalmente 
cerca de nuestro sitio de trabajo, aunque con ciertas restricciones: 
+ no más de 100 llamadas por usuario y mes  
+ cada llamada devuelve un máximo de 50 viviendas
+ la búsqueda hemos de realizarla por coordenadas geoespaciales 

### Primer paso

Solicitar nuestro token a partir de las credenciales que nos han facilitado. Para ello tenemos que codificar nuestros códigos
de la siguiente manera. Si nuestro Apikey es 1234 y el secret 1738, los concatenaremos como 1:1, ejemplo:
+ 1234:1738

Posteriormente los transformaremos a Base64, obteniendo una cadena alfanumérica bastante larga.

Imaginemos que nuestro "Apikey:Secret" codificado en [Base64](https://www.base64encode.org/) es **YWJjOjEyMw==**, de manera que para Solicitar nuestro
token escribiremos en la terminal lo siguiente:

```bash
$ curl -X POST -H "Authorization: Basic YWJjOjEyMw==" -H "Content-Type: application/x-www-form-urlencoded" -d 'grant_type=client_credentials&scope=read' "https://api.idealista.com/oauth/token" -k
```

### Segundo paso

Recibido el token mediante la petición anterior, lo utilizaremos para solicitar datos a la API de Idealista, pero antes debemos saber qué preguntar. Este es el ejemplo
que nos da Idealista: 

```bash
curl -X POST -H "Authorization: Bearer {{OAUTH_BEARER}}" -H "Content-Type: multipart/form-data;" -F "center=40.430,-3.702" -F "propertyType=homes" -F "distance=15000" -F "operation=sale" "https://api.idealista.com/3.5/es/search"
```

Algunos de los filtros que nos permite son:

|name           |data type  |descripcion            |info adicional                                     |
|---------------|-----------|-----------------------|---------------------------------------------------|
|country        |string     |es/it/pt               |values: es, it, pt                                 | 
|operation      |string     |                       |values: sale, rent                                 |
|propertyType   |string     |                       |values: homes, offices, premises, garages, bedrooms|
|center         |string     |                       |example: "40.123,-3.242"                           |
|distance       |double     |                       |                                                   |
|locationId     |string     |idealista location code|                                                   |
|maxItems       |integer    |items per page         |50 as maximum                                      |

<br>

La respuesta a la llamada lo devuelve en formato [JSON](https://joancano.github.io/data/idealista/ide.json). Para evitarme problemas al trabajar con un GIS, lo que he hecho es guardarme la petición
como JSON y lo he convertido a [CSV](https://joancano.github.io/data/idealista/ide.csv) en [https://json-csv.com/](https://json-csv.com/).

Después de descargarlos en [CSV](https://joancano.github.io/data/idealista/ide.csv) lo cargo en QGIS como archivo de texto delimitado, y los junto todos en un mismo fichero, por ejemplo un GPKG.


```bash
$ sudo curl -X POST -H "Authorization: Bearer token" -F "propertyType=homes" -F "center=41.655851,-0.91080369"  -F "distance=2000" -F "operation=rent" -F "maxItems=50" "https://api.idealista.com/3.5/es/search">ide.json
```

En el ejemplo de arriba estoy preguntado por las casas que se alquilan en un radio de 2Km desde donde trabajo.

<br>

<video width="640" height="410" controls>
  <source src="https://joancano.github.io/data/idealista/ide.mp4" type="video/mp4">
</video>