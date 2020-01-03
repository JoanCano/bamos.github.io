---
layout: post
title: Sumando segundos en metadatos de imágenes
date: 2017-10-17
author: Joan Cano
categories: [bash]
---
Hace cierto tiempo, se me planteó la posibilidad de renombrar los metadatos de un grupo de imágenes
las cuales habían sido tomadas sin la fecha y hora.

Saber la hora en la que se realizaron era necesario, puesto que todas estaban a 00:00:00, de manera
que la solución recaía en establecer una fecha y hora de inicio en todas, para luego ejecutar el siguiente **script**
en el lenguaje de consola *bash*.

```bash
#!/bin/bash
a=0
for i in `ls`
do
	fecha='00:00:'`echo $a`
#	echo $fecha
	exiftool -DateTimeOriginal+=$fecha $i
	a=`expr $a + 2`
	echo $a
done
```

Establecer la misma hora a todas las imágenes es sencillo, utilizando la librería que se aprecia arriba (exiftool),
mediante la misma etiqueta -DateTimeOriginal.. Un ejemplo!
```bash
$ exiftool "-DateTimeOriginal+=Y:M:D h:m:s" filename.png
$ exiftool "-DateTimeOriginal+=2017:10:8 5:30:7" filename.png
```
Obviamente, hemos de instalar exiftools...

Luego, se coloca el ejecutable **.sh** en la carpeta que contiene las imágenes donde se ejecuta
listando y renombrando con +2 segundos cada vez que recorre una imagen (las imágenes normalmente por su nombre están correctamente listadas en la carpeta).

De esta manera, podemos ajustar una fecha/tiempo para tener un tiempo de disparo similar al que habría sido en realidad.
