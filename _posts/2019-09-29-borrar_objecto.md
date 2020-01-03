---
layout: post
title:  "Cómo borrar un objeto de una fotografía con GIMP"
date:   2019-09-29
categories: [linux, fotografia]
---

Como bien dice el título del post, dedico estos párrafos a explicar cómo poder eliminar un objeto/persona de una imagen.

Lo primero que tenemos que hacer es descargarnos [GIMP](https://www.gimp.org/), del cual si no habéis oído hablar se trata de un software de edición de imágenes libre y de código abierto.

Es un software que cuenta con muchísimas herramientas, muchas de ellas parecidas o con igual función a las que podemos encontrar en editores de imágenes como el conocido Photoshop.

En este caso vamos a utilizar la herramienta *Heal Selection Tool* dentro del plugin [Resynthesizer Plugin Suite](https://github.com/bootchk/resynthesizer), pero para ello debemos intalar previamente paquete de herramientas.

En la página web de descarga aparecen los ejecutables y scripts para los sistemas operativos Linux y Windows. En ambos casos, dependiendo de en que SO estemos trabajando tendremos que descargarnos los archivos e instalarlos de la siguiente manera:

```bash
# desde Linux

+ Mostrar los archivos ocultos (ctrl+h) y dirigiros a /home/user/.gimp-2.8/plug-ins y mover los archivos descargados aquí
+ Extraer el archivo *"resynthesizer.tar_0.gz"* y luego *"Resynthesizer"*.
+ Darle permisos de ejecución a todos los archivos para "lectura y escritura" y marcar la casilla de verificación "permitir ejecutar el archivo como un programa"
+ Lanza y restaura Gimp para que se apliquen los cambios

# desde Windows
+ Copiar los archivos C:/users/user_name/.gimp-2.8/plugins

+ Lanza y restaura Gimp para que se apliquen los cambios
```

### **Pero en Linux es más sencillo!!**

Instala el siguiente paquete y ya tendrás las mismas herramientas

```bash
$ sudo apt install gimp-plugin-registry
```

Ahora ya puedes utilizar la herramienta Filters > Enhance > Heal Selection Tool

Actualizo con los siguientes párrafos un problema que he tenido recientemente, y es que en la versión que explico arriba es la 2.8, cuando la actual (08-10-19) es la 2.10.12.

Al actualizar a la última versión he perdido la herramienta *Heal Selection Tool*, por lo que explico a continuación lo que he hecho:
- Eliminar tanto gimp como todas las carpetas relacionadas con él, desde /usr/lib/gimp como en /home/user/.config y /home/user/.gimp2.8 con 'sudo apt --purge remove gimp' y luego manualmente las demás carpetas
- He instalado la última versión a partir del repo PPA que mantiene el principal desarrollador de Gimp
- Una vez incluido el repo, he instalado GIMP como anteriormente

```bash
$ sudo apt install gimp-plugin-registry
```

Sin embargo tendremos algunas herramientas de la *suite* pero no Heal Selection!, de manera que tendremos que instalar

```bash
$ sudo apt install gimp-python
```

Y además eliminar la ruta de los plug-ins que redirige a la carpeta del user, dejaremos solo la de /usr/lib/gimp (dentro de edición/preferencias)

Una vez realizados estos pasos, iremos a Filtros - Restablecer todos los filtros.

En cuanto habras GIMP debería aparecer la herramienta

Dejo un vídeo utilizando la herramienta en Ubuntu 18.04.03:

<iframe width="560" height="315" src="https://www.youtube.com/embed/659J9YquZsg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
