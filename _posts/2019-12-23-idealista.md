---
layout: post
title:  "Cómo extraer datos de Idealista y ejemplos con ellos"
date:   2019-11-18
categories: [linux, OSM, programacion]
---
Tenemos que darnos de alta para tener acceso a la api de Idealista

Luego tendremos que solicitar nuestro token a partir de las credenciales que nos han facilitado

Por último, desde la terminal realizamos la petición usando como Key el nuevo token:
sudo curl -X POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTU3NzE1MjM4MSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9QVUJMSUMiXSwianRpIjoiNjQ2N2UyMzgtOTdiMi00M2UzLThjYTAtMWZkODU4MzEyMWRmIiwiY2xpZW50X2lkIjoiMGg0aWZhdHJpd2twam90dzByM2VwZG1uemh2cmF1NjUifQ.hHbSFsUhEIwxP4nY0TxzkQ55DuQzYhInBOpsV0RlMoY" -F "propertyType=homes" -F "center=38.622769,-0.132201"  -F "distance=2000" -F "operation=sale" "https://api.idealista.com/3.5/es/search">ide.json

Los datos los estoy guardando en JSON y para no complicarme puesto que son pocos datos los he convertido a CSV en [https://json-csv.com/](https://json-csv.com/).
Después de descargarlos en CSV lo cargo en QGIS como archivo de texto delimitado, y los junto todos en un mismo fichero, por ejemplo un GPKG.


