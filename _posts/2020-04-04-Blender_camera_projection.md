---
layout: post
title:  "Proyección de cámara en Blender"
date:   2020-04-04
categories: [linux]
---
https://www.youtube.com/watch?time_continue=821&v=yq0XjvBlsiU&feature=emb_logo

## Proyección de camara en Blender

Antes:

1. Crear duplicado
2. Añadir modificado Decimate, con un valor dependiendo del tamaño en polígonos de nuestro modelo
3. Si estamos de acuerdo, Apply
4. Renombramos esta malla resultante como LowPoly
5. Creamos un nuevo material
 5.1. Abrimos el editor de nodos y cambiamos a PrincipleBSDF
 5.2. Add image texture x3
 5.3. BaseColor: textura original
 5.4. Roughness:
 5.5. Normal: normal map: Image texture
 
6. Antes de pasar al proceso Bake, crear dos nuevas imágenes y guardarlas, las llamaremos
 6.1. baked_ao (ambient oclusion)
 6.2. baked_normal
 
7. Ya las podemos enlazar en el editor de nodos pero no veremos nada

8. Volvemos al Image editor
 8.1 Añadimos baked_ao y en la pestaña de bake chequeamos Selected to active
 8.2 Seleccionamos los modelos LowPoly y HighPoly
 8.3 Bake Type: ambient oclusion
 8.4 Ray Distance: 0.05
 8.5 Bake y guardamos
 
9. Mismo proceso con las normales



https://www.youtube.com/watch?v=lmbAs9jE1vI

Añado OBJ con Textura
Me voy a Menú Texture Paint
En el panel derecho: 'active tool n workspace'
- Mode: Single Image
- seleccionar mi textura. Ahora están conectados

Añadir textura con la que pintaremos
1. Vamos a la pestaña texture tab
2. New: Añadimos la imagen

Ahora hay que conectar la img que acabamos de añadir con nuestro modelo
1. Volvemos al menú 'active tool n workspace'
2. Brush settings > Texture > seleccionamos la img nueva
3. Mapping > stencil

Manejamos la textura a pintar con botón derecho, Ctrl y Shift.
Solo podemos Mover - Escalar y Rotar

