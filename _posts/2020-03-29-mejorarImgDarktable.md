---
layout: post
title:  "Mejorar en lote imágenes con Dartable"
date:   2020-03-29
categories: [linux]
---

[Darktable](https://www.darktable.org/) es una aplicación libre para la edición de imágenes raw. El principal motivo por el que lo utilizo es la calidad en los resultados, y su flujo de trabajo para procesamiento en lote cuando tengo sets gigantesco de imágenes que retocar ligeramente para fotogrametría.

En este post quería describir las herramientas más interesantes que tiene para lanzar este proceso en lote y así corregir tus imágenes para obtener la mejor textura en tu modelo 3D.

## Intro
Lo primero a destacar (cuando escribo este post la versión actual es la 3.0) es que podemos interactuar con el programa por [linea de comandos](https://darktable.gitlab.io/doc/es/overview_chapter.html#darktable_cli_commandline_parameters).

Lo segundo es que tiene la posibilidad de utilizar todo el historial de acciones de una imagen para aplicarlo a las demás.


### [Balance de blancos](https://darktable.gitlab.io/doc/es/modules.html#whitebalance)
Puedes ajustar el balance de blancos de manera manualo utilizar alguna imagen en la que tengas tu carta de blancos. Para ello hazlo desde la opción Predefinido.


### Correción de la exposición

+ para mejorar la exposición lo podemos hacer manualmente desde el panel del histograma
+ Retocar el nivel de negro
+ Si se utiliza la exposición automática, calcularlo previamente con la herramienta que tiene para tal. 

Aquí cada fotógrafo lo modificará de una manera. Yo por ejemplo tiro con una Olympus M5 mark II y suelo disparar con -0.3V de exposición, y al ser sin espejo, procuro que todas las imágenes queden igual de homogéneas de luz para que en la correción de la exposición no tenga que ir imagen a imagen, sino corregirlas todas de una o por lotes grandes.  

### Reducción del ruido
El mejor punto de partida para la reducción de ruido es la reducción de ruido (perfilado). El efecto solo depende del tipo de cámara y el valor de ISO, ambos derivados de los datos Exif. Todas las demás propiedades son tomadas desde la base de datos de perfiles de ruido que el equipo de darktable

### Eliminación de manchas (sport removal)
Esta puede no ser la mejor idea para procesar fotogrametría, pero nos podría interesar en algún caso que dejemos un set de imaǵenes para la reconstrucción de la geometría y otro para la texturización.


### Añadir detalle (sombras y luces)

- Módulo Luces y Sombras: ajustar para decuperar detalles
- Módulo Contraste, Saturación y Brillo: normalmente añado contraste y saturación
- Módulo Reconstrucción de color: es capaz de recuperar el color de las luces sobrexpuestas
- Módulo Demosaico: controla como la interpolación cromática es procesada
- Reconstrucción de luces: trata de reconstruir la información de color que está usualmente cortada debido a información incompleta en alguno de los canales
- Módulo Enfoque: pues para añadir nitidez :)






