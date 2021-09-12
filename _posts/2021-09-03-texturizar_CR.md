---
layout: post
date:   2021-09-03
title:  "Texturizar en Capturing Reality"
categories: [fotogrametria]
---

## Texturizar en CR

Limpiar la malla manualmente
Utilizar la herramienta Clean, antes del unwrap
Realizar un unwrap
Probar al principio con Maximal Texture count style, adaptative texel size style with Minimal required texel size set on Optimal

- Unwrap Settings
large triangle removal: 1000
fixed texel size
texture resolution: 8k
texel size: custom
custom texel size: 0.002 

ten por seguro que las imgágenes del escáner están desactivadas

- Texturing Settings
- Different Unwrap Styles
- Polycount and Texture resolution
- Texture reprojection tool
realizar una simplificación a 5 millones de triángulos
unwrap again:
gutter 1
maximal tex 8k
large triangle 1000
style: maximal texture count
maximal tex count: 8

Ahora reproyectamos

seguimos conservando las partes
- Exporting models 
exportar en obj, con Tile type (u,v)

como fbx:
save mesh by parts: no
export vertex colors: yes
embebed texture: yes
export to a single file: no
texture file format: jpg
