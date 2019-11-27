---
layout: post
title: Script en ArcPy para calcular superficies por su valor
date: 2017-09-07
categories: [python]

---

### Mi primer Script

Cursando el Máster en TIG en la [Universidad de Zaragoza](http://unizar.es/">Universidad de Zaragoza), una de las asignaturas fue [Python](https://www.python.org/). En ella hemos utilizado como intérprete [ArcPy](http://desktop.arcgis.com/es/arcmap/10.3/analyze/arcpy/what-is-arcpy-.htm) el cual tiene extensión en ArcGIS para analizar datos, conversión de datos, administración de datos y automatización de mapas, lo que ayuda a aumentar la productividad.

Dejo aquí abajo el script. Se trata de un simple geoproceso que consiste en extraer de una capa de puntos cualquiera, el valor que se demanda de la suma de los píxeles que caen dentro de los puntos. De manera que itera, generando buffers, hasta que alcanza el valor que se le pide.

```python

"""
---------------------------------------------------------------------------
Descripcion: El siguiente script determina el area que se requiere para una
    determinada actividad, en este caso el calculo de una biomasa de
    100000 ton/ha para poder emplazar una planta.
Funcionamiento: A partir de una capa de puntos (plantas.shp) que representa
    la localizacion de estas, se recrean areas de influencia hasta determinar
    la area que se requiere.
    El valor de cada area de influencia se calcula a partir de la suma
    del valor de los pixeles.
---------------------------------------------------------------------------
"""

# Importo los modulos
import arcpy, os
from arcpy import env
from arcpy.sa import *

# Defino mi sistema de referencia espacial
sr = arcpy.SpatialReference()
sr.factoryCode = 23030
sr.create()
arcpy.env.outputCoordinateSystem = sr

# Declaro la ruta y mi entorno de trabajo
ruta = "C:\\Users\\Joan-PC\\Desktop\\Datos\\"
arcpy.env.workspace = ruta
# Sobreescribir mis archivos
arcpy.env.overwriteOutput = True
# Licencia
arcpy.CheckOutExtension("Spatial")

# variables locales:
capa = "plantas.shp"
raster = "prod"
output = "output"
campo = "FID"
miAcopio = "acopio"
existe = 0

# Creo el campo que contendra el valor de biomasa

fieldList = arcpy.ListFields(capa)

for field in fieldList:
    if field.name == miAcopio:
        existe = 1
if existe == 1:
    print miAcopio+" existe"
else:
    arcpy.AddField_management(capa,miAcopio)
    print miAcopio+" agregado"

# Utilizo un cursor de busqueda para accedeer al valor de los distintos
# campos de la tabla plantas, por fila y de manera independiente.

campos = arcpy.UpdateCursor(capa)

for c in campos:
    entidad = str(c.FID)
    #  Defino la clausula -> FID = X
    whereClause = "{0} = {1}".format(campo, entidad)
    # Creo una capa temporal con la seleccion
    arcpy.MakeFeatureLayer_management(capa, "currentMask", whereClause)

    # Defino las variables dinamicas del bucle
    distancia = 500
    densidad = 0

    # Bucle, hasta que no tenga 100000 de aqui no sale
    while densidad <= 100000:
                capaSalida = entidad + "_" +str(distancia)+".shp"
                arcpy.Buffer_analysis("currentMask", capaSalida, distancia, "FULL", "ROUND", "NONE", "", "PLANAR")

                outRaster = arcpy.sa.ExtractByMask(raster, capaSalida)
                myArray = arcpy.RasterToNumPyArray(outRaster, nodata_to_value=0)
                densidad = myArray.sum()
                distancia+= 100

                print "buffer incompleto: "+str(densidad)+" repite "+capaSalida

    # Cuando supere el valor, extraer el resultado en una capa nueva
    if densidad > 100000:
        salida = arcpy.CopyFeatures_management(capaSalida, "area_"+entidad+"_"+str(distancia))
        print "buffer completo: "+str(salida)+" con: "+str(densidad)+" valor"

        # Ahora tengo que actualizar el campo con el valor de biomasa

        with arcpy.da.UpdateCursor(salida, (miAcopio)) as cursor:
            for row in cursor:
                row[0] = densidad
                cursor.updateRow(row)
        del cursor
del campos
```
