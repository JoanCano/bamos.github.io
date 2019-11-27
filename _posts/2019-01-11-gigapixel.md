---
layout: post
title: "Cómo hacer imágenes Gigapíxel"
date: 2019-01-11
author: "Joan Cano"
categories: [fotografia]
---

La curiosidad de esta semana ha sido cómo hacer imágenes Gigapíxel..

En el último post que escribí, hablaba sobre cómo hacer imágenes 360. Hacer imágenes Gigapixel no es muy diferente.

El primer paso es hacer las fotos, pero ¿cómo?. Si os acordáis, para hacer las imágenes para la 360, debíamos tener un % de solape entre imágenes, además de cubrir toda la esfera.

El proceso para realizar la gigapíxel es similar. Si disponemos de una cámara con un objetivo 14-70mm, debemos tomar las fotos con la máxima distancia focal, en este caso 70mm. Es decir, tomaremos TODAS las imágenes con la mayor longitud focal posible, o decidiremos la *f* según el nivel de detalle que queramos obtener.

En este momento en el que ya sepamos cómo disparar las fotos, tenemos dos vías disponibles para ayudar a conseguir nuestras imágenes y que no se nos quede ningún hueco en la imagen final:

- La primera opción es disparar manualmente, por lo que se trata de hacer un rompecabezas de nuestra imagen final, por ejemplo eligiendo dos puntos que actúen de principio y fin (tanto longitudinal como latitudinalmente).
- Comprar un brazo robótico que dispare y coloque la cámara por nosotros.

El siguiente paso sería construir la gigapixel, por lo que podríamos seguir los mismos pasos que se utilizaron en el post anterior [cómo hacer fotos 360](https://joancano.github.io/fotografía/2019/01/02/360-photos.html), pero en cambio de elegir una proyección cilíndrica elegiríamos la plana.

El último paso sería compartir la imagen. Como se trata de una imagen lateralmente muy ancha necesitaremos un visor que nos permita movernos a través de ella, y fluidamente.

He probado muchos software.. ¡MUCHOS! estando la mayoría de ellos descontinuados. Recomiendo 2:

+ GDAL + Leaflet (opción Open Source)
+ Panotour (comercial)

Para utilizar GDAL y Leaflet en Linux, instalaremos GDAL:

`$ sudo apt install gdal-bin`

Una vez que tengamos GDAL instalado, debemos ejecutar en el terminal el comando:

`$ gdal2tiles -p raster ourImage.jpg ourDestinyFolder`

Y ya tendremos nuestro visor !!

Para que GDAL cree un html con Leaflet y no OL automáticamente, incluir *-l* :

`gdal2tiles.py -l -p raster ourImage.jpg ourDestinyFolder`

Todavía no entiendo el por qué, pero cuando he procesado los formatos png y tiff, el resultado ha sido inesperado, me genera los tiles con cambios cromáticos. Por lo que recomiendo procesar este tipo de imágenes sin ningún tipo de sistema de coordenadas y en formato jpg!

Pd: aquí algunos de los visores hechos:
+ [Gigapixel de la Serra de Bèrnia](https://joancano.github.io/static/projects/web/gigaBernia/gp_bernia.html)
