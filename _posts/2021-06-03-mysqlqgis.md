---
layout: post
title:  "Instalación y uso mysqlimport plugin (QGIS)"
date:   2021-06-03
categories: [GIS, data base]
---

## Instalación plugin

Deberás instalarte el plugin **mysqlimport** en QGIS 

Tendrás el siguiente error; `I got the following error ModuleNotFoundError: No module named ‘MySQLdb’`

**Windows**
1. Para arreglarlo debes instalar MySQLclient en el directorio de Python
2. Instala el [paquete mysqlclient](https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient) en el siguiente directorio: `C:\Program Files\QGIS 3.4\apps\Python37\Lib\site-packages`
   1. Escoge la versión que coincida con tu versión de Python
   2. Descomprime el fichero `.whl`
3. Copia todos los ficheros descomprimidos en el directorio de Python. En este caso: `C:\Program Files\QGIS 3.4\apps\Python37\Lib\site-packages`

Aquí dejo un video

<iframe width="560" height="315" src="https://www.youtube.com/embed/1JjwZ1nbsS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Linux**

```bash
$ sudo apt install python3
$ apt install python3-pip
$ apt install python3-mysqldb

## Si no funciona instalar también
$ pip3 install mysqlclient 
$ pip3 install pymysql
$ pip3 install requests
```