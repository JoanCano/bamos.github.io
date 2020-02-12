---
layout: post
title:  "Fotogrametría a partir de imágenes 360"
date:   2020-01-10
categories: [360,fotogrametria]
---

# En qué programas se pueden importar imágenes 360 y poder procesarlas?

Software
Installing Agisoft PhotoScan: http://www.agisoft.com/downloads/installer

Captura de fotos

antes de cargar fotos en PhotoScan es necesario seleccionar las más adecuadas para la reconstrucción del modelo. 
Considerando los requisitos ambientales generales para el rendimiento de Agisoft PhotoScan

Evite objetos sin textura, brillantes, espejos u transparentes.

Evite los primeros planos no deseados.
Evite mover objetos dentro de la escena a reconstruir.

ESTACIONES DE PLANIFICACIÓN. La planificación de la estrategia de captura en avanzado es crítica. Debe considerar las siguientes recomendaciones:

Asegúrese de que la cantidad de fotos brinde cobertura suficiente para evitar zonas ciegas. Para reconstruir un área, es necesario que sea visible 
en al menos dos imágenes. Las superposiciones de imágenes deben ser del 60% o más. El objeto a reconstruir debe ocupar el área máxima de la foto.

AJUSTES DE LA CÁMARA

Valor SO: en general, el nivel ISO debe establecerse en el valor más bajo. Cuanto más bajo es el valor ISO, más bajo es el ruido. Sin embargo, 
dependiendo de las condiciones de luz, un valor ISO más bajo puede aumentar el tiempo de exposición más de lo deseado, en cuyo caso se puede usar un valor ISO más alto

Valor HDR: iSTAR se puede configurar como "Exposición única", "HDR ON" (5 niveles de exposición) o "HDR PRO" (9 niveles de exposición). En general, "HDR ON" ofrece 
excelentes resultados para la captura en interiores. Sin embargo, donde las condiciones de iluminación son muy extremas con niveles muy altos de sombras claras y 
oscuras para capturar en la misma escena, HDR PRO proporcionará mejores resultados para la construcción de nubes de puntos

Modo "Capturar con análisis actual" iSTAR: Esta es una configuración predeterminada de iSTAR que se activa automáticamente después de tomar la primera foto. Cuando la 
cámara iSTAR toma una imagen, analiza por primera vez toda la escena para establecer el valor de exposición adecuado promedio en la vista de 360 °. Estos ajustes se 
guardan de manera predeterminada, lo que significa que el tiempo de análisis se puede guardar entre capturas múltiples dentro de condiciones similares. Sin embargo, 
para escenas con condiciones de luz muy cambiantes entre tomas, la función debe cancelarse presionando la flecha verde en la esquina superior izquierda, 
la nueva escena es luego analizado durante la siguiente captura.

Flujo de trabajo general

El flujo de trabajo general de iSTAR dentro de Agisoft PhotoScand difiere ligeramente del estándar, que comúnmente utiliza imágenes de cuadros en lugar de panoramas, 
pero sin embargo, sigue siendo fácil de usar. El objetivo de esta sección es explicar el flujo de trabajo general utilizando los datos de iSTAR dentro del flujo de 
trabajo de AgisoftPhotoScan.

En primer lugar, es necesario procesar los datos sin procesar iSTAR usando NCTech ImmersiveStudio para producir imágenes equirectangulares unidas. 
El proceso de costura ImmersiveStudio utiliza el archivo de calibración iSTAR específico que se crea en condiciones incontroladas durante NCTech, 
el proceso de calibración de fábrica para cada cámara. Por lo tanto, procesar imágenes en NCTech ImmersiveStudio significa El usuario se beneficia 
de esta calibración de precisión con un error de pespunte reducido. AutoPano Giga 4.2 producido por Kolor, también se puede usar para unir imágenes iSTAR, 
ya que funciona con datos brutos iSTAR. NCTech Immersive Studio ajusta automáticamente la resolución de la imagen de salida al máximo (10K), 
o alternativamente, la resolución se puede seleccionar de varias otras configuraciones previas (2K, 4K o 16 Mpixel). La resolución resultante de la nube 
de puntos y, por lo tanto, la precisión, se relacionan directamente con la resolución de la imagen de entrada, por lo tanto, se recomienda una resolución máxima. 
NCTech Immersive Studio tiene una interfaz simple y fácil de usar. Para procesar datos brutos de iSTAR en ImmersiveStudio, simplemente arrastre y suelte las 
carpetas de imágenes correspondientes en la ventana de Immersive Studio, o seleccione el directorio correspondiente. Ambas opciones conducen al mismo resultado. 
Por defecto, el directorio de salida se establece igual que el directorio de entrada, pero se puede cambiar fácilmente haciendo clic en el botón de puntos. 
Para obtener más información sobre cómo usar ImmersiveStudio, visite https://www.nctechimaging.com/immersive-studio/

CARGA DE FOTOS, TIPO DE SENSOR Y CALIBRACIÓN. Después de procesar los datos sin procesar de iSTAR, * jpgpanoramas debe importarse a Agisoft PhotoScan (1. AddChunk2. 
Flujo de trabajo> Agregar fotos o icono correspondiente), seleccione el tipo de sensor apropiado para iSTAR. (Herramientas> Calibración de cámara, Tipos de cámara: Esférico).

Tenga en cuenta que los parámetros de calibración están deshabilitados. Debido a que las características de los parámetros de calibración para cada cámara iSTAR 
ya se han aplicado durante el proceso de costura de Immersive Studio (consulte 03.01. Procesar panoramas en NCTech Immersive Studio) no es necesario aplicar más 
datos de calibración en el flujo de trabajo de Agisoft PhotoScan.

ALINEACIÓN DE CÁMARA

Agisoft PhotoScan busca puntos comunes en las fotos de entrada y las coincide automáticamente. En esta etapa, PhotoScan calcula las posiciones de cada estación de 
fotos / lugar y su orientación externa (Flujo de trabajo> Alinear fotos) desde donde se obtienen nubes de puntos dispersos y posiciones de cámara.

EDIFICIO DENSE POINT NUBE, MALLA Y TEXTURACIÓN

La construcción de la nube de puntos densos, la malla y la textura no requieren ningún cambio del flujo de trabajo estándar utilizando imágenes de marco en lugar 
de imágenes esféricas iSTAR, por lo que no se incluye una explicación detallada de estas funciones en esta Nota de aplicación. Sin embargo, se considera que el 
flujo de trabajo general correspondiente al proceso específicamente requerido muestra que no cambia desde el flujo de trabajo común de las imágenes del cuadro

Según las imágenes y las posiciones estimadas de la cámara, se obtiene una nube de puntos densos después del escenario de alineación de 
la cámara (Flujo de trabajo> Crear nube de puntos densos).

PhotoScan reconstruye la malla poligonal 3D basada en la nube de puntos densos (Flujo de trabajo> Crear malla).

Después de reconstruir la geometría, el modelo puede ser texturizado (Flujo de trabajo> Crear textura).


Resultados

Las nubes de puntos de color, mallas o salidas intermedias del proceso se pueden obtener utilizando el flujo de trabajo descrito en Agisoft PhotoScan. 
El objetivo de esta sección es mostrar los resultados que se pueden lograr utilizando la cámara NCTech iSTAR dentro de Agisoft PhotoScan. 
El proyecto seleccionado para este estándar la explicación del flujo de trabajo requirió 11 panoramas, 5 de ellos debajo del arco y 6 externos al mismo

Conclusión

Se pueden obtener nubes de puntos coloreadas de alta calidad utilizando iSTAR dentro de Agisoft PhotoScan, siguiendo el flujo de trabajo general que 
se describe aquí. Los beneficios de trabajar con las soluciones NCTech combinadas con Agisoft PhotoScan para obtener nubes de puntos de colores de 
alta calidad y mallas son: Solo se necesita una toma iSTAR para cubrir una superficie de entorno 360, lo que significa ahorrar tiempo contra tomar 
una mayor cantidad de imágenes para cubrir la misma área con una cámara que no sea 360 . Mayor superficie cubierta por lente. La lente de ojo de pez 
iSTAR no solo cubre una vista de 360 ​​°, sino también un área más grande por lente. No se necesita un conocimiento de las técnicas de fotografía ya 
que el análisis de iSTAR analiza toda la escena y calcula automáticamente la configuración de cámara más adecuada para la vista de 360 ​​° completa.
El software iSTAR y NCTech están diseñados para ser altamente automatizados y fáciles de usar, se requiere capacitación mínima. Salida de alto 
rendimiento en condiciones de iluminación difíciles. iSTAR puede proporcionar imágenes de alta calidad visual en una amplia gama de entornos de 
rayos gracias a la configuración HDR automática y el rango EV de 27 paradas f. Calidad de la textura. El análisis de escenas completas de iSTAR en 
combinación con sus imágenes HDR permite la creación de modelos de alta resolución con alta calidad texturas de superficie. Para concluir, 
iSTAR proporciona imágenes que son muy adecuadas para fines de fotogrametría dentro de Agisoft PhotoScan. Proporciona beneficios particularmente 
fuertes en entornos con poca luz o alto contraste, en interiores y donde hay arquitecturas complejas.

https://www.nctechimaging.com//downloads-files/PhotoScan_Application_Note_v1.1.pdf

# Puede ser mejor separarlas en cube maps?


# Separar la imagen 360

pip install cube2sphere

sphere2cube source.jpg -r2048 -fTGA

$ cube2sphere front.jpg back.jpg right.jpg left.jpg top.jpg bottom.jpg -r 2048 1024 -fTGA -ostitched

source: https://pypi.org/project/sphere2cube/

