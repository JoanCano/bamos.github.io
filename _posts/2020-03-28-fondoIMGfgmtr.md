---
layout: post
title:  "Eliminar el fondo de imágenes para fotogrametría de objeto cercano"
date:   2020-03-28
categories: [fotogrametria]
---
Me ha surgido la necesidad y curiosidad de eliminar el fondo de las imágenes para realizar fotogrametría de [objeto cercano][1].

Mi duda era si eliminando el fondo de imágenes como la [siguiente][2] podría:

* mejorar la alineación de mis imágenes
* reducir el ruido
* mejorar la malla y textura
* prescindir de según qué tipo de soportes

De manera que lo primero que hice es recabar información acerca de los programas capaces de eliminar el fondo de las imágenes. 

|Software   |Tipo   |Enlace |
|---        |---    |---    |
| Clipping Magic        |Comercial     |https://es.clippingmagic.com/|
|Photoshop              |Comercial     |https://helpx.adobe.com/photoshop/how-to/remove-and-replace-background.html|
|RemoveBG               |Comercial     |https://www.remove.bg/|
|PhotoScissors          |Comercial     |https://photoscissors.com/|
|Movavi PhotoEditor     |Comercial     |https://www.movavi.com/support/how-to/how-to-remove-background-from-image.html|
|Gimp                   |Libre         |https://www.gimp.org/|
|G'MIC                  |Libre         |http://gmic.eu/|

En segundo lugar, había que saber cuáles eran capaces de "automatizar" el proceso, pues no quiero eliminar el fondo de una sola imagen, sinó de cientos. Cuando digo automatizar me refiero a no tener que estar haciendo máscaras, comprobando que se ha seleccionado todo el objeto o color, etc.

Aquí tenéis algunas pruebas que realicé:
1. [Remove background of images with Movavi photo editor][3]
1. [Remove background of images with G'MIC in Gimp][4]
1. [Remove background of images with GIMP][5]

Por último, está el tema económico. Pagar me va a permitir ahorrar tiempo? Son mejores los resultados de un software comercial? Automatización?... . A continuación os pongo los programa que elegiría finalmente, sus ventajas e inconvenientes.

Clipping Magic y RemoveBG son rapidísimos y dan buenos resultados, sin embargo el método de pago que tienen no favorece para nada al proceso que busco. Están enfocados a un o varias imágenes como mucho.

PhotoScissors por precio y calidad es el mejor, sin duda.

Si nos vamos a software libre me quedaría con G'MIC, el cual corre dentro de programas como Gimp o Krita. El proceso es más lento y si no tenemos un ordenador adecuado, va a costarle mucho tiempo procesar. Habría que probar a utilizarlo sin depender de un software externo para ver si los tiempos mejoran.


[1]: https://joancano.gitbook.io/lifemmetry/fotogrametria-terrestre/como-capturar-fotos
[2]: https://drive.google.com/open?id=1LSVGD7SBhijopmvyltrGsqLBB68cb8ng
[3]: https://www.youtube.com/watch?v=qZXhYowJLfQ
[4]: https://www.youtube.com/watch?v=1mRuGfOFQBA
[5]: https://www.youtube.com/watch?v=746xvyrFzqI