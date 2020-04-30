---
layout: post
title:  "360_y_fotogrametria"
date:   2020-01-09
categories: [360,fotogrametria, blender]
---
Este post lo dedico a investigar acerca de la unión entre sets 360 como puedan ser vídeos o imaǵenes y su unión con el campo de la fotogrametría.
No me voy a parar como en otros post comparando softwares y demás, al grano.

Por temas monetarios, gustos y principios me he quedado con 2:
* [Blender][1]
* [Davinci resolve][2] 

**Por qué?**
[Blender][1] nos va a permitir modelar, trabajar nuestras mallas, bakes, e incluso producir en 360. Es Open Source y hay muchísimo material para aprender
[Davinci resolve][2] es gratuito actualmente, al menos el software sin todas sus características. Nos va a permitir trabajar el contenido 360 de una manera más fluida. Además tiene módulos para importar objetos 3D (esta opción hay que pagarla).

En fin, me parece buena combinación para llegar a hacer algo decente e interesante.

**Objetivo**
Mezclar una imagen 360 con objetos 3D obtenidos por fotogrametría. A veces ocurre que solo se captura un elemento por fotogrametría, un objeto, un edificio, etc. La captura de todo un entorno nos puede llevar muchísimo tiempo cuando el objetivo real es un solo elemento. Este elemento, pongamos que una estatua en un objeto individual, pero en el caso de que quisiésemos emplazar la estatua en la plaza donde está situada nos obligaría a capturar todo el entorno, ¿o hay otras soluciones?. 

Estas son las pruebas que he hecho

## Prueba 1. Blender
Para poder hacer lo que tengo en mente, creo que debería seguir los siguientes pasos.

1. Importar una imagen 360 en Blender donde pueda embeber modelos 3D. Pruebo a insertar imagen 360 como mundo (suele llamarse imagen HDRI), para ello:
* Vamos al menú shading
* shader editor > shader type Wordl 
* Añadimos los nodos Background > World output y Texture > Environment texture
* Ya podremos ver nuestra imagen 360
* Para descargar imágenes HDRi --> [hdrihaven][3]

**Problema**: la imagen está de background, por lo que no tiene escala, lo cual nos impide movernos por la escena. DESCARTADA.
Contra: no podemos movernos por la escena

## Modelar una imagen 360
Podría probar a modelar la imagen 360 o sus cubemaps. Para ello podría probar con [FSPY][4


**Para juntar o eparar la imagen 360 en cubemaps**
```bash
$ pip install cube2sphere
$ sphere2cube source.jpg -r2048 -fTGA # para separar en 6 cubemaps
$ cube2sphere front.jpg back.jpg right.jpg left.jpg top.jpg bottom.jpg -r 2048 1024 -fTGA -ostitched # para juntar los 6 cubemaps
```
[source][5]


## Metodología 2.B lender + Davinci Resolve
Es una putada que tenga un módulo que permita importar escenas FBX y no pueda probarlo. En su lugar se me ocurre renderizar un vídeo 360 en Blender e importarlo a DR para añadirle efectos y sonido.

Para el render seguir estos tips:
* Sampling
    * Render: 200
    * Viewport: 64
* Activar ambient occlusion y amoldar al tamaño de mis objetos
* Bloom para objetos brilantes
* Activar Screen Space Reflections
* Activar Denoising en Cycles
* En Performance poner Tiles cada 256. Poner más si la tarjeta gráfica es buena.


## Blender + Unity
Importar malla texturizada. Los nodos deben quedar tal que:
Set General--> Texture Coordinate (UV) > (Vector) Mapping (Vector) > 

* (Vector) ImgT [Color Space: Non-Color] > (color)Normal Map (normal) > (Normal)Principal BSDF
* (Vector) ImgT (Color) > (Base Color)Principal BSDF
* (vector) ImgT Metallic (Color) > (Metallic) Principal BSDF
* (vector) ImgT Roughness (Color) > (Roughness) Principal BSDF








[1]: https://www.blender.org/
[2]: https://www.blackmagicdesign.com/es/products/davinciresolve/
[3]: https://hdrihaven.com
[4]: https://fspy.io/
[5]: https://pypi.org/project/sphere2cube/