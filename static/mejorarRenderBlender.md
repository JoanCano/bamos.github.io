Cycles consume muchos recursos

si utilizasemos eVee mejoramos el tiempo de renderizado. muchísimo.
Para acercar eVee a Cycles tenemos que ir activando mósulos que están por defecto desactivados en eVee para mejorar el tiempo de renderizado.

trabajo desde modo render

Vamos Scene

* Sampling
    * Render 200
    * Viewport 64

* Activamos Screen Space reflections
    * activar Refraction
* Activamos Ambient Occlusion+
    * jugar con distance

Vamos al menú Material: settings
* activamos Screen Space Refraction

Vamos al menú Sun
* Activamos Contact shadow
    * softness: modificar para quitar geometría en materiales

    
Volvemos al menú Scene: shadows (mejorar sombras)
* Cascade Size & Cube Size : aumentar resolución
* Method: cambiar si mejoramos
* High bitdeph
* soft shadows

Camera: Depth of field
* F-top: 0.5
* Focus Distance: mover hasta enfocar

F12 Para lanzar Render Final
