---
layout: post
title:  "Aplicar mejoras básicas a las fotografías con GIMP"
date:   2019-09-29
categories: [fotografia]
---


## Reparar fotografías: oscuras, corregir el color, desenfocadas,…

Se enumeran las herramientas disponibles y su opción de menú.

+ **Herramienta Niveles:** *Colores > Niveles*. Para un uso básico de la herramienta, arrastrar convenientemente el triángulo derecho y/o el central de la gráfica hacia la izquierda. La foto ganará iluminación. Para un uso más completo, está la herramienta Curvas, descrita más adelante.


+ **Herramienta auto:** *Colores > Auto*. Una serie de correcciones automáticas con las que muchas veces no se consigue una mejora aceptable, pero puede probarse en un momento. En ocasiones es suficiente para reparar la fotografía.

+ **Herramienta Brillo/contrase:** *Colores > Brillo y contraste*. Poco potente pero en muchos casos es suficiente para resolver el problema.

+ **Herramienta Tono/Saturación:** *Colores > Tono y saturación*. De especial interés para una foto descolorida.

+ **Herramienta Curvas:** *Colores > Curvas*. Es la herramienta más sofisticada para cambiar el color, brillo, contraste o 
transparencia de la capa/selección. Podemos fácilmente, sin ser muy entendido en esta herramienta, reparar fotografías con uno que han quedado con tonos antinaturales, con algún color demasiado marcado.

+ **Capa adicional en modo “Multiplicar” o “Dividir”.**  Se crea una copia de la capa a corregir que sirve como una capa de “control de ganancia”. 

*Multiplicar* oscurece partes de una imagen. Dividir hace lo opuesto, aclara partes de una imagen. Pasos a seguir: Duplicar la capa a *tratar > desaturar la nueva capa > Aplicar un desenfoque gaussiano* al resultado, con un radio grande (100 o más) > Establecer el modo en el diálogo de capas a ‘Dividir’ > Controlar la cantidad de corrección ajustando la opacidad de la capa, o usando las herramientas *‘Brillo/Contraste’*, *‘Niveles’*, o *‘Curvas’* en la capa nueva.

+ **Enfocar.** Puede mejorar significativamente una imagen algo borrosa. Opción de menú filtros > Realzar [Enhance] > Enfocar [Sharpen]. Aumentar la agudeza hasta ver un buen resultado en la previsualización.

## Reparar una determinada área seleccionada de la imagen (Oscurecer/iluminar, colorear, curvas, etc.)

Podemos usar cualquiera de las herramientas anteriores (niveles, marcado a fuego, brillo/contraste, …) sobre un área seleccionada, en lugar de aplicar a toda la imagen. Para ello, primero seleccionar dicha área con cualquier herramienta de selección: rectángulos, elíptica, selección libre, … Después aplicar la opción de corrección deseada.

Fuente: [Manual de edición de imágenes con GIMP](https://www.qe2computing.com/manual-edicion-imagenes-gimp/)


