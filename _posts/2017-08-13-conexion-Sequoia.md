---
layout: post
title: "Obtención de datos mediante HTTP-API de la cámara Parrot Sequoia"
date: 2017-08-13
categories: [remote_sensing]
---
A continuación, muestro una manera sencilla de conectarse y exportar datos del sensor *Sunshine*.

### Los interfaces de la Sequoia
- HTTP-API
- PTP (Picture Transfer Protocol)

#### Vía HTTP Control API

Los datos son devueltos en formato json, a través de peticiones a la siguiente dirección:

```
192.168.47.1
```

Las diferentes URLs a las que podemos acceder son:

+ **/capture**: para obtener el estado de captura Sequoia, iniciar y detener una captura
+ **/config**: para obtener y configurar la configuración de las cámaras
+ **/status**: para obtener todas las informaciones sobre el estado físico de Sequoia
+ **/calibration**: para obtener el estado de calibración, iniciar y detener una calibración
+ **/storage**: para obtener información sobre la memoria
+ **/file**: para obtener información de archivos y carpetas
+ **/download**: para descargar archivos
+ **/delete**: para eliminar archivos y carpetas
+ **/version**: para obtener el número de serie y la versión del software
+ **/wifi**: para obtener el SSID Sequoia
+ **/manualmode**: para obtener y establecer la ISO y la exposición manualmente
+ **/websocket**: para usar notificaciones de websocket en eventos asincrónicos

### Intercambio de datos de interés

#### /status

+ SOLICITUD HTTP: http://192.168.47.1/status
+ Esta URL proporciona información sobre el estado físico de la Sequoia. Se devolverán las siguientes informaciones:
  + request
  + gps
  + instruments
  + sunshine
  + temperature > http://192.168.47.1/status/sunshine

```python
import requests
import json

sequoia_ip = '192.168.47.1'
r = requests.get('http://' + sequoia_ip + '/status')
print json.dumps(r.json(), indent = 4)
```

#### Data
Las siguientes líneas de código son en el software R. Mediante la librería rjson podremos leer de una forma más elegante y estructurada el json que nos devuelve el sensor *Sunshine*.

```R
library(rjson)
statusValues <- fromJSON(file = "~/Escritorio/Datos_Sequoia/status.json")
print(statusValues)
```

#### Destapado

```R
sunshineValuesOn <- fromJSON(file = "~/Escritorio/Datos_Sequoia/sunhineOn.json")
print(sunshineValuesOn)
```

#### Tapado

```R
sunshineValuesOff <- fromJSON(file = "~/Escritorio/Datos_Sequoia/sunhineOff.json")
print(sunshineValuesOff)
```

## Creamos un DataFrame

```R
json <-list(sunshineValuesOn, sunshineValuesOff)
json_df <- as.data.frame(json)
print(json_df)
write.table(json_df, file = "~/Escritorio/json.csv", sep = ",", dec = "," )
```
