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

Ya se empieza a hablar de teledetecciójncercano con la aparición de los drones, pues gracias a los sensores que incorporan consiguen una muy alta resolución con respecto a los satélites convencionales. Sin embargo, se trata de estar todavía más cerca.

Para ejemplificarlo, ahora y durante el post, vamos a poner como superficie a analizar unas pinturas rupestres. Éstas se podrían situar en un abrigo, por lo que si tenemos acceso a él, podríamos situarnos a escasos centímetros o metros de las pinturas.

Se han realizado investigaciones para la detección de pinturas mediante el canal infrarrojo, puesto que la naturaleza o estado de conservación de las pinturas en los colores que el ojo humano puede percibir las hace invisibles. Estas captura de datuos en el infrarrojo facilita el proceso de identificación de las escenas pictóricas. ¿Para qué?

+ Obtener una reproducción fiel a la realidad y de la mejor calidad posible de los elementos iconográficos contenidos en los paneles de pintura rupestre
+ Estudios e investigaciones sobre el arte rupestre, tienen como objetivo el aporte datos fiables para su documentación, interpretación, conservación y gestión.  
+ Necesidad de preservación de las manifestaciones artísticas de nuestros antepasados, así como de la necesidad de ampliar conocimientos para realizar, con precisión y objetividad, la documentación, análisis y conservación del arte rupestre prehistórico.  

### Estado del arte

Al realizar una búsqueda sobre teledetección próxima, encontramos artículos como:

+ [Recovery of archaeological wall paintings using novel multispectral imaging approaches](https://heritagesciencejournal.springeropen.com/articles/10.1186/2050-7445-1-33)

+ [Multi-spectral Imaging of La Casa de las Golondrinas Rock Paintings](http://www.famsi.org/reports/99052/99052Robinson01.pdf)
+ [Enhancemen to hidden patterns in paintings using statistical analysis](https://www.sciencedirect.com/science/article/abs/pii/S1296207413000241?via%3Dihub)
+ [Non-Invasive Investigation of Pigments of Wall Painting in S. Maria Delle Palate di Tusa](https://www.mdpi.com/2571-9408/2/3/147/htm)

+ [Advances in multispectral and hyperspectral imaging for archaeology and art conservation](https://link.springer.com/article/10.1007/s00339-011-6689-1)

+ [A New Infrared True-Color Approach for Visible-Infrared Multispectral Image Analysis](https://dl.acm.org/doi/fullHtml/10.1145/3241065)

Se aprecia que una de las maneras de encontrar más información en las pinturas es a través del canal infrarrojo, el cual contiene la información más relevante. Se supone que la radiación infrarroja penetra debajo de la superficie, lo que permite la visualización de detalles invisibles, como dibujos y pigmentos en lienzos y paneles.

Sin embargo, puede ser útil utilizar la información de toda la serie multiespectral, ya que el canal infrarrojo recorre desde el Ir cercano al térmico; ocupa un gran ancho de banda.

#### ¿Qué sensores se utilizan?

+ Multispectral camera Chroma C4 from DTA s.r.l. (Cascina, Pisa, Italy) 
    + spectral bands of Blue (450 nm), Green (550 nm), Red (600 nm) and Infrared (1050 nm) 

+  Kodak Megaplus
    + spectral bands 450,  500,  550,  600, 750, 800, 900, and 1000 nm

+ BRAVO handheld Raman spectrometer

+ [InGaAs Camera](https://www.hamamatsu.com/eu/en/product/cameras/ingaas-cameras/index.html)
    + spectral bands 950 - 1700 nm

+ Multispectral Camera Moravian G2-8300
 + SWIR bands

+ CRISATEL


Los sensores que se suelen utilizar por lo que se ve, son cámaras digitales preparadas para capturar el infrarrojo, o espectroradiómetros. 

La principal diferencia entre ambos en lo que atañe a este post, es que la cámara nos da una imagen y el espectroradiómetro valores en su ancho de banda (lo cual nos permite hacer una gráfica muy bonita :)

El objetivo principal sería emplear una cámara, puesto que el objetivo es "ver". La contra es que las cámaras llegan tan solo hasta el Ir cercano. 

### Qué herramientas se emplean

+ No hay un algoritmo que se adapte a todos los tipos de cubiertas o superficies, sin embargo bastantes papers coinciden en que el algoritmo de **PCA (Análisi de Componentes Principales)** es el medio de procesamiento estándar de imágenes para producir un análisis preciso. PCA parece ser preciso y robusto por lo que se recomienda su uso como el primero en una gama de procesos al analizar imágenes multiespectrales.

> Giacometti, Alejandro, et al. «The Value of Critical Destruction: Evaluating Multispectral Image Processing Methods for the Analysis of Primary Historical Texts». Digital Scholarship in the Humanities, octubre de 2015, p. fqv036. DOI.org (Crossref), doi:10.1093/llc/fqv036


+ Un método mucho más simple para analizar imágenes es el llamado método de "falso color". Consiste en seleccionar tres canales del conjunto multiespectral, se superponen y forman de una imagen en color (falso). La combinación más habitual es Infrarrojo, Rojo y Verde (IrRG), aunque también se puede usar la combinación Infrarrojo, Verde y Azul (IrGB).


+ El método *Chromatic derivative imaging* [ChromaDI](https://drive.google.com/file/d/1H5pB9EjSLeJzJ_yIPEo1SB_BdKlrab8-/view?usp=drivesdk), es una imagen de color falso relacionada con la primera derivada de la curva de reflectividad del sujeto. 

+ La clasificación de las imágenes multiespectrales utiliza áreas de entrenamiento para proceder a la clasificación. Las áreas de entrenamiento recogen las firmas espectrales del área seleccionada, para posteriormente buscar coincidencias según el algoritmo utilizado en la búsqueda de similitudes con la firma espectral.

+ El método *Independent Component Analysis* ICA es una técnica estadística y computacional relativamente nueva basada en un modelo generativo, cuyo propósito es revelar factores ocultos que subyacen a conjuntos de variables aleatorias, mediciones o señales que se supone que son una mezcla de varias fuentes subyacentes llamadas componentes independientes (Comon, 1994; Hyvärinen y Oja, 2000). ICA está superficialmente relacionado con el análisis de componentes principales (PCA), pero ICA es una técnica mucho más poderosa, capaz de encontrar los factores o fuentes subyacentes cuando falla el PCA o el análisis factorial (Hyvärinen, 1999a).

> Legnaioli, Stefano, et al. «Recovery of Archaeological Wall Paintings Using Novel Multispectral Imaging Approaches». Heritage Science, vol. 1, n.o 1, 2013, p. 33. DOI.org (Crossref), doi:10.1186/2050-7445-1-33.

+ El método Spectral Angle Mapper (SAM) es una clasificación espectral que utiliza un ángulo n-D para hacer coincidir los píxeles con los espectros de referencia. 

+ K-mean

+ Spectral Mixture Analysis

+ Clustering by Spectral Shape


### Método

Vistos papers, metodologías, cámaras.. llama la atención que nadie haya probado con las cámaras convencionales que se están utilizando en drones, como la cámara Parrot Sequoia o las de Micasense.

Ambas cámaras cuentan con GPS y sensor de luminosidad, lo que les permite entregar imágenes en valores de reflectividad (aunque la única problemática es que no pueden crear imágenes de reflectividad, tan solo ortomosaicos), pero se puede trabajar con valores de radiancia.

En los trabajos realizados que he revisado, nadie ha intentado utilizar estas cámaras ni crear ortomosaicos a partir de las pinturas fotografiadas. Tan solo se ha trabajado realizando fotografías y aplicando algoritmos de decorrelación.

La pregunta por lo tanto es, ¿sirven estas cámaras para obtener más información de pinturas rupestres, textos, cuadros, etc.. de la que se obtiene con una cámara RGB convencional?. Probemos a realizar el método PCA con imágenes de la cámara Sequoia para averiguarlo.


#### Análisis de Componentes Principales & Sequoia

**Antes de nada, ¿de qué va esto del Análisis por Componentes Principales?**

El análisis de componentes principales (PCA) es un método para reducir las dimensiones de las variables medidas (bandas) a los componentes principales (JARS, 1993). La transformación del componente principal proporciona un nuevo conjunto de bandas (componentes principales) que tienen las siguientes características:
+ no están correlacionados
+ cada componente tiene una varianza menor que el componente anterior. 
+ es un método eficiente para extraer información y comprimir datos (Ready y Wintz, 1973). 
+ Dada una imagen con N bandas espectrales, los componentes principales se obtienen por cálculo matricial (Ready y Wintz, 1973; Richards y Jia, 2006):

En resumen, el objetivo del ANP es disminuir la información a un menor tamaño sin perder parte significativa de la información original. Comprime las variables y elimina la información redundante utilizando una matriz de varianza-covarianza.

**Qué datos tenemos de la cámara multiespectral**
En el caso de que trabajásemos con un sensor comercial como los que se utilizan en drones:
+ Sequoia
+ MS Red Edge

La información que se obtiene es un archivo de imagen (normalmente Tiff) que ha de ser tratado en un software específico para fotogrametría como Agisoft o Pix4D. Este proceso se realizaría en el caso de que nos interesase la información en valores de reflectividad, sin embargo, si solo necesitamos una única imagen y no nos importar trabajar con valores brutos, pues no haría falta pasar por ese tipo de programas.

**Sotfware con el que realizar PCA**

En mi caso he probado 2. El primero ha sido el plugin de QGIS **Semi Automatic Classification plugin**
[Web](https://fromgistors.blogspot.com/p/semi-automatic-classification-plugin.html)	|[Manual](https://readthedocs.org/projects/semiautomaticclassificationmanual/downloads/pdf/latest/).

Su instalación para trabajar en Linux se realiza de la siguiente manera:

`$ sudo apt-get update && sudo apt-get install qgis python3-matplotlib python3-scipy`

Sin embargo no me ha funcionado bien con las versiones actuales de Qgis (3.10) y las imágenes de la cámara Sequoia. Por lo que he probado desde Windows con el plugin **PCA for change detection**.

Este ha funcionado +- y he podido comprobar los resultados a partir de un ACP con imágenes de la cámara Sequoia de un abrigo con pinturas rupestres.

## Resultado y opinión

Los resultados del ACP no decepcionan, si que se consigue extraer información útil. Sin embargo éstas cámaras disponen de muy pocos megapíxeles en comparación a una cámara digital convencional. Estoy hablando de que la cámara Sequoia tiene 1'2 Mpx, y cualquier cámara DSLR o Mirrorles tiene como mínimo 16 Mpx.

De momento creo, que no sacrificaría la resolución que me da una cámara digital para utilizar esta cámara multiespectral en concreto (sin mencionar que solo tenga 4 bandas). Puede que con una cámara con más resolución y más bandas se pueda llegar a generar un ACP que valga la pena.