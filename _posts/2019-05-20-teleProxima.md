---
layout: post
title: "Teledetección cercana. Buscando información invisible"
date: 2019-05-18
author: "Joan Cano"
categories: [gis]
---


Se han utilizado espectroradiómetros para conocer los pigmentos en las paredes a partir de varias firmas espectrales recogidas.
Obtención de índices derivados que permitan caracterizar diversos aspectos de la imagen, tales como pigmentos férricos, vegetación, presencia de desconchados, costras, etc

#### Características

+ Es una técnica no invasiva
+ Nos permite ver los pigmentos utilizados en las pinturas pero invisibles ante nuestros ojos
+ Imágenes a diferentes longitudes de onda

También cámaras convencionales tomando imágenes a color.

Cámaras multiespectrales las cuales contienen uno o varios filtros recogiendo información de varias longitudes de onda, lo malo es que tienen resoluciones por píxel más altas.



+  la utilización de imágenes multiespectrales permite
la detección de pinturas, cuya naturaleza o estado de conservación las hacen invisibles al ojo
humano, facilitando el proceso de identificación de las escenas pictóricas

+ obtener una reproducción fiel a la realidad y de la mejor calidad posible de los elementos iconográficos contenidos en los paneles de pintura rupestre

+ Los métodos tradicionales combinan el uso de la fotografía con técnicas de dibujo y calco directo.  sustitución de los métodos más agresivos de calco por la aplicación de técnicas de retoque fotográfico sobre imágenes digitales.

+  En efecto, la aplicación de técnicas de retoque fotográfico suele consistir en la manipulación de los parámetros de visualización de imágenes digitales (brillo, contraste, color, ecualización de histogramas, etc.) mediante la utilización de paquetes de software comercial de retoque fotográfico.

+ estudios e investigaciones sobre el arte rupestre, tienen como objetivo aporte datos fiables para su documentación, interpretación,
conservación y gestión.  necesidad de preservación de las manifestaciones artísticas de nuestros antepasados, así como de la necesidad de ampliar conocimientos para realizar, con precisión y objetividad, la documentación, análisis y conservación del arte rupestre prehistórico.  

+ Para alcanzar el objetivo principal de esta investigación, consistente en el desarrollo de una metodología para la documentación integral del arte rupestre  

– Generación de MDS georreferenciados de las cavidades, mediante la utilización de métodos topográficos y fotogramétricos, que proporcionan un archivo documental geométrico

 Existe una variedad de métodos de procesamiento de imágenes adecuados para esta tarea, que incluyen K-medias agrupación 9 , Análisis de componentes principales (PCA) 10 , Análisis de componentes independientes (ICA) 11 y Análisis de mezclas espectrales lineales (LSMA) 12 , aunque desde el principio. En esta investigación, demostramos el éxito limitado de la agrupación K-means para nuestra aplicación ( Giacometti, 2013). Por lo tanto, procesamos las imágenes multiespectrales de cada muestra tratada utilizando tres métodos diferentes: PCA, ICA y LSMA.

 La PCA superó a ICA y LSMA como el medio de procesamiento de imágenes mediante el cual producir estimaciones de recuperación precisas

. La imagen FC se suele construir asignando a sus canales R, G y B tres de las cuatro imágenes de la serie multiespectral. En la Figura  4 a-d, las imágenes obtenidas al combinar las imágenes infrarroja, roja y verde (IrRG) e infrarroja, verde y azul (IrGB) se comparan con la imagen infrarroja sola.

#### software

 + [NiftyReg para registrar imágenes](https://sourceforge.net/projects/niftyreg/)



#### Qué se puede utilizar para "ver más allá"

+ Se puede utilizar únicamente el infrarrojo
+ Crear un layer stack y hacer una composición de falso color
+ vector quantization algorithm
+ image segmentation
+ Clustering by Spectral Shape
+ SAM/LGB algorithm

### Enlaces

+ http://www.dstretch.com/
+ http://davinci.asu.edu/index.php?title=Main_Page
+ https://imagej.net/ImageJ2
+ http://www.famsi.org/reports/99052/99052Robinson01.pdf
+ https://heritagesciencejournal.springeropen.com/articles/10.1186/2050-7445-1-33
+ https://academic.oup.com/dsh/article/32/1/101/2957366
+ http://www.cosch.info/documents/14072/51956/WG+4_Liang.pdf/ac777e09-ff91-4539-aad9-7b59568bbaba
+ https://ropensci.org/blog/2016/08/23/z-magick-release/
