---
layout: post
title: "Teledetección cercana. Buscando información invisible"
date: 2019-05-18
author: "Joan Cano"
categories: [gis, teledetección]
---

### Introducción 

Quiero dedicar una pequeña investigación a la búsqueda de información acerca de teledetección próxima o cercana. Por supuesto y antes que nada hay que aclarar de que se trata.

La teledetección como bien sabemos (y google también) es la obtención de información sin llegar a tener contacto con el objeto, elemento o superficie. De manera que si hablamos de teledetección cercana, lógicamente me refiero a obtener información a escasa distancia del elemento en cuestión. Se trata pues de una técnica no invasiva.

Para ejemplificarlo, ahora y durante el post, vamos a poner como superficie a analizar unas pinturas rupestres. Éstas se podrían situar en un abrigo, por lo que si tenemos acceso a él, podríamos situarnos a escasos centímetros o metros de las pinturas.

la detección de pinturas, cuya naturaleza o estado de conservación las hacen invisibles al ojo
humano, facilitando el proceso de identificación de las escenas pictóricas

+ obtener una reproducción fiel a la realidad y de la mejor calidad posible de los elementos iconográficos contenidos en los paneles de pintura rupestre

+ estudios e investigaciones sobre el arte rupestre, tienen como objetivo aporte datos fiables para su documentación, interpretación,
conservación y gestión.  necesidad de preservación de las manifestaciones artísticas de nuestros antepasados, así como de la necesidad de ampliar conocimientos para realizar, con precisión y objetividad, la documentación, análisis y conservación del arte rupestre prehistórico.  

### Estado del arte

Al realizar una búsqueda sobre teledetección próxima, encontramos artículos como:

+ [Recovery of archaeological wall paintings using novel multispectral imaging approaches](https://heritagesciencejournal.springeropen.com/articles/10.1186/2050-7445-1-33)

+ [Multi-spectral Imaging of La Casa de las Golondrinas Rock Paintings](http://www.famsi.org/reports/99052/99052Robinson01.pdf)
+ [Enhancementofhiddenpatternsinpaintingsusingstatisticalanalysis](https://www.sciencedirect.com/science/article/abs/pii/S1296207413000241?via%3Dihub)
+ [Non-Invasive Investigation of Pigments of Wall Painting in S. Maria Delle Palate di Tusa](https://www.mdpi.com/2571-9408/2/3/147/htm)

+ [Advances in multispectral and hyperspectral imaging for archaeology and art conservation](https://link.springer.com/article/10.1007/s00339-011-6689-1)

+ [A New Infrared True-Color Approach for Visible-Infrared Multispectral Image Analysis](https://dl.acm.org/doi/fullHtml/10.1145/3241065)


Se aprecia que la manera de encontrar más información en las pinturas es a través del canal infrarrojo, el cual contiene la información más relevante. Se supone que la radiación infrarroja penetra debajo de la superficie, lo que permite la visualización de detalles invisibles, como dibujos y pigmentos en lienzos y paneles.

Sin embargo, puede ser útil utilizar la información de toda la serie multiespectral.


#### ¿Qué sensores utilizan?

+ Multispectral camera Chroma C4 from DTA s.r.l. (Cascina, Pisa, Italy) 
 + spectral bands of Blue (450 nm), Green (550 nm), Red (600 nm) and Infrared (1050 nm) 

+  Kodak Megaplus
 + spectral bands 450,  500,  550,  600, 750, 800, 900, and 1000 nm

+ BRAVO handheld Raman spectrometer

+ [InGaAs Camera](https://www.hamamatsu.com/eu/en/product/cameras/ingaas-cameras/index.html)
 + spectral bands 950 - 1700 nm

+ Multispectral Camera Moravian G2-8300
 + SWIR bands

+  CRISATEL


Los sensores que se suelen utilizar por lo que se ve, son cámaras digitales preparadas para capturar el infrarrojo, o espectroradiómetros. La principal diferencia entre ambos en lo que atañe a este post, es que la cámara nos da una imagen y el espectroradiómetro valores en su ancho de banda (lo cual nos permite hacer una gráfica muy bonita :)



#### Qué herramientas se emplean

+ No hay un algoritmo que se adapte a todos los tipos de cubiertas o superficies, sin embargo bastantes papers coinciden en que el algoritmo de PCA (Análisi de Componentes Principales) es el medio de procesamiento estándar de imágenes para producir un análisis preciso. PCA parece ser preciso y robusto por lo que se recomienda su uso como el primero en una gama de procesos al analizar imágenes multiespectrales. 

> Giacometti, Alejandro, et al. «The Value of Critical Destruction: Evaluating Multispectral Image Processing Methods for the Analysis of Primary Historical Texts». Digital Scholarship in the Humanities, octubre de 2015, p. fqv036. DOI.org (Crossref), doi:10.1093/llc/fqv036


+ Un método mucho más simple para analizar imágenes es el llamado método de "colores falsos". Consiste en seleccionar tres canales del conjunto multiespectral, se superponen y forman de una imagen en color (falso). La combinación más habitual es Infrarrojo, Rojo y Verde (IrRG), aunque también se puede usar la combinación Infrarrojo, Verde y Azul (IrGB).


+ El método *Chromatic derivative imaging* [ChromaDI](https://drive.google.com/file/d/1H5pB9EjSLeJzJ_yIPEo1SB_BdKlrab8-/view?usp=drivesdk), es una imagen de color falso relacionada con la primera derivada de la curva de reflectividad del sujeto. 

+ La clasificación de las imágenes multiespectrales utiliza áreas de entrenamiento para proceder a la clasificación. Las áreas de entrenamiento recogen las firmas espectrales del área seleccionada, para posteriiormente buscar coincidencias según el algoritmo utilizado en la búsqueda de similitudes con la firma espectral.

+ El método *Independent Component Analysis* ICA es una técnica estadística y computacional relativamente nueva basada en un modelo generativo, cuyo propósito es revelar factores ocultos que subyacen a conjuntos de variables aleatorias, mediciones o señales que se supone que son una mezcla de varias fuentes subyacentes llamadas componentes independientes (Comon, 1994; Hyvärinen y Oja, 2000). ICA está superficialmente relacionado con el análisis de componentes principales (PCA), pero ICA es una técnica mucho más poderosa, capaz de encontrar los factores o fuentes subyacentes cuando falla el PCA o el análisis factorial (Hyvärinen, 1999a). 

> Legnaioli, Stefano, et al. «Recovery of Archaeological Wall Paintings Using Novel Multispectral Imaging Approaches». Heritage Science, vol. 1, n.o 1, 2013, p. 33. DOI.org (Crossref), doi:10.1186/2050-7445-1-33.

+ El método Spectral Angle Mapper (SAM) es una clasificación espectral que utiliza un ángulo n-D para hacer coincidir los píxeles con los espectros de referencia. El algoritmo determina la similitud espectral entre dos espectros calculando el ángulo entre los espectros y tratándolos como vectores en un espacio con una dimensionalidad igual al número de bandas. Esta técnica es relativamente insensible a los efectos de iluminación y albedo. Los espectros de miembros finales utilizados por SAM pueden provenir de archivos ASCII o bibliotecas espectrales, o puede extraerlos directamente de una imagen (como espectros de ROI promedio). SAM compara el ángulo entre el vector de espectro del miembro final y cada vector de píxel en el espacio n-D. Los ángulos más pequeños representan coincidencias más cercanas al espectro de referencia. Los píxeles más alejados que el umbral de ángulo máximo especificado en radianes no se clasifican. Si usa datos de radiancia, el error generalmente no es significativo porque el origen todavía está cerca de cero.

+ K-mean

+ Spectral Mixture Analysis

+ Clustering by Spectral Shape


### Método

Vistos papers, metodologías, cámaras.. llama la atención que nadie haya probado con las cámaras convencionales que se están utilizando en drones, como la cámara Parrot Sequoia o las de Micasense.

Ambas cámaras cuentan con GPS y sensor de luminosidad, lo que les permite entregar imágenes en valores de reflectividad (aunque la única problemática es que no pueden crear imágenes de reflectividad :), tan solo ortomosaicos. ).

En los trabajos realizados que he revisado, nadie a intentado utilizar estas cámaras ni crear ortomosaicos a partir de las pinturas fotografiadas. La pregunta por lo tanto es, ¿sirven estas cámaras para obtener más información de pinturas rupestres, textos, cuadros, etc? Probemos con a realizar el método PCA con imágenes de la cámara Sequoia para averiguarlo.


#### Análisis de Componentes Principales & Sequoia


**Qué es un Análisis por Componentes Principales**

El análisis de componentes principales (PCA) es un método para reducir las dimensiones de las variables medidas (bandas) a los componentes principales (JARS, 1993). La transformación del componente principal proporciona un nuevo conjunto de bandas (componentes principales) que tienen las siguientes características: componentes principales no están correlacionados; cada componente tiene una varianza menor que el componente anterior. Por lo tanto, este es un método eficiente para extraer información y compresión de datos (Ready y Wintz, 1973). Dada una imagen con N bandas espectrales, los componentes principales se obtienen por cálculo matricial (Ready y Wintz, 1973; Richards y Jia, 2006):

Por lo tanto, la media de 𝑋 asociada con cada banda es 0. 𝐷 está formada por los vectores propios (de la matriz de covarianza 𝐶𝑥) ordenados como valores propios de máximo a mínimo, para tener la varianza máxima en el primer componente. De esta manera, los componentes principales no están correlacionados y cada componente tiene una varianza menor que el componente anterior (Ready y Wintz, 1973). Por lo general, los dos primeros componentes contienen más del 90% de la varianza. Por ejemplo, los primeros componentes principales se pueden mostrar en un compuesto de color (página 116) para clases de cobertura del suelo con alta iluminación (página 112), o se pueden usar como entrada para la clasificación supervisada (página 116).
**Qué datos tenemos de la cámara multiespectral**


**Sotfware con el que realizar PCA: Semi Automatic Classification plugin**

[Web](https://fromgistors.blogspot.com/p/semi-automatic-classification-plugin.html)	|[Manual](https://readthedocs.org/projects/semiautomaticclassificationmanual/downloads/pdf/latest/)


**Instalación en linux**

`$ sudo apt-get update`
`$ sudo apt-get install qgis python3-matplotlib python3-scipy`


**Metodología**

**Resultado**
