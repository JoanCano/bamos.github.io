---
marp: true
title: L'ús de les TIG en l'àmbit de la captura de realitat 3D
header: L'ús de les TIG en l'àmbit de la captura de realitat 3D
footer: Joan Cano | 2021
theme: gaia
size: 4:3
backgroundColor: #fff
#color: #000
#backgroundImage: url('')

style: |
  video::-webkit-media-controls {
    will-change: transform;
  }
---

![bg left:33% 100%](../assets/3dscanner_Spinoff_negro.png)

## **L'ús de les TIG en l'àmbit de la captura de realitat 3D**

Reptes i Temes Clau en Geografia

23 de novembre, 2021

---

<br>
<div align="justify">Sessió en la que es mostraran diferents tecnologies i tècniques de captura massiva de dades i quina relació tenen amb les TIG a través de diferents projectes realitzats per una empresa de geomàtica</div>

---
<!--paginate: true-->

## Hola!

<h3><a href="https://joancano.github.io"><div align="center">joancano.github.io</div></a></h3>

---

![w:500 center](../assets/asciiart_joan.svg)

---
Colonia Chahilpec

[![w:700 center](../assets/chailpec.png)](https://www.openstreetmap.org/#map=16/15.4626/-90.3031)

---
#### **Màster TIG** (2017)

[![w:650 center](../assets/master_tig.jpg)](https://estudios.unizar.es/estudio/ver?id=608)

---

#### **3DSCANNER** (2017-21)

[![w:800 center](../assets/3dscanner_Spinoff_negro.png)](https://3dscanner.es/)

---

#### **Suport tècnic** (2017-21)

![w:700 center](../assets/soporte.svg)

---

### **De què anem a xarrar**

- Fotogrametria
- Làser escàner
- Aplicacions / Projectes

---

<!--_backgroundColor: black-->
<!--_color: white-->
<!--_header: De què anem a xarrar -->

# Fotogrametria

---

### **Fotogrametria**

![bg right:40% 200% ](../assets/alfonso.png)

Tècnica mitjançant la qual a partir de diverses imatges amb un subjecte comú entre elles, es pot arribar a obtenir un model tridimensional amb propietats geomètriques i mètriques de qualitat molt alta

---

#### Fotogrametria. **Paral·laxi**

![w:500 center](../assets/Parallax_art.svg)

---

#### Fotogrametria. **Estereoscòpia**

![w:700 center](../assets/solape.png)

---

### Fotogrametria

#### **Què necessite per fer fotogrametria?**

![w:700 center](../assets/requisitos.png)

---

##### Fotogrametria amb drons

### [Ala Fixa](https://sensefly.com)

![bg left:35% 100%](../assets/ebee.png)

- Grans extensions
- Altura de vol: +70 m
- Resolució per píxel (cm)
- Temps de vol: llarg

---

##### Fotogrametria amb drons

### [Multirotor](https://www.dji.com/)

![bg left:35% 110%](../assets/Matrice-300.png)

- Petites extensions
- Altura de vol: 10 - 120 m
- Resolució per píxel (mm)
- Temps de vol: curt

---

##### Planificació vol fotogramètric
![w:400 center](../assets/Pix4Dcapture.png)
Pix4D Capture

---

##### Planificació vol fotogramètric

<br>
<div align="center">
<video src="../assets/pixplan.mp4" controls width="90%"></video>
</div>

---

##### Planificació vol fotogramètric

![w:800](../assets/plan_1.svg)

---

##### Planificació vol fotogramètric
![](../assets/plan_2.svg)

---

##### Planificació vol fotogramètric
![](../assets/plan_3.svg)

---

##### Planificació vol fotogramètric

![w:800](../assets/plan_fail.png)

---

##### Planificació vol fotogramètric

![w:800](../assets/plan_fail_2.png)

---

##### Planificació vol fotogramètric

![w:800](../assets/emotion-logo.png)

[Enllaç descàrrega]()

---

##### Planificació vol fotogramètric

<a href= "https://youtu.be/LmFXOKf-TKE" ><video src=".[./assets/laPeste.mp4](https://youtu.be/LmFXOKf-TKE)" controls width="100%"></video></a>

---

### **Imatges** -> SRC **WGS84**

![w:400 center](../assets/info_img_anafi.png)
![bg opacity:0.3](../assets/presa_santolea_foto.JPG)

---

### **Imatges**

Transformació a **SRC** projectat

| Coordenades (x,y) | Unitat de mesura | Finalitat           |
| :---------------: | :--------------: | ------------------- |
|   Geogràfiques    |  Graus decimals  | Diguem on           |
|    Projectades    |      Metres      | Diguem com dibuixar |

---

### **Imatges**

Transformació d'altura **el·lipsoïdal** a **ortomètrica**

![w:800](../assets/calculo_alt_orto.png)

---

#### Càlcul de l'altura ortomètrica -> **H = h – N**

| var |            Altura             | Elevació                                              |
| :-: | :---------------------------: | ----------------------------------------------------- |
|  H  |      Altura ortomètrica       | elevació basada en el geoide                          |
|  h  |      Altura el·lipsoïdal      | elevació el·lipsoïdal de referència (WGS84)           |
|  n  | Altura / ondulació del geoide | elevació del model de geoide utilitzat (EGM08 REDNAP) |

---

## Formats d'entrega

| Tipus                         | Format   |
| ----------------------------- | -------- |
| Núvol de punts                | LAS      |
| Ortomosaic                    | GeoTIFF  |
| Malla 3D                      | FBX, OBJ |
| Model Digital de Superficie   | GeoTIFF  |
| Model Digital del Terreny     | GeoTIFF  |
| Ortomosaicos multiespectrales | GeoTIFF  |
| Ortomosaicos térmicos         | GeoTIFF  |

---

### Fotogrametria Terrestre

<br><div align=center><video src="../assets/laPeste.mp4" controls width="90%"></video></div>

---

### Fotogrametria Terrestre

[![w:700 center](../assets/forn_uz_1.png)](https://sketchfab.com/3d-models/samarkand-horno-f-7e48a9d8c5e1491fad134ac58f721fa1)

---

## Formats d'entrega

| Tipus                   | Format   |
| ----------------------- | -------- |
| Núvol de punts          | LAS      |
| Ortomosaic / Ortoalçats | GeoTIFF  |
| Malla 3D texturitzada   | FBX, OBJ |

---

#### Software de processament fotogramètric

![](../assets/photogrammetry%20software.svg)

---
<!--_backgroundColor: black-->
<!--_color: white-->
<!--_header: De què anem a xarrar -->
# Làser escàner

---
<!--_backgroundColor: black-->
<!--_color: red-->
### Làser escàner
![bg contain](../assets/hds/RealityCapture/rc07.png)

---
<!--_color: white-->
### Làser escàner
![bg](../assets/hds/building_intensity.png)

---
### **Làser escàner**

![bg contain](../assets/hds/building_seccion.png)

---
### **Làser escàner**

![bg contain](../assets/hds/building_seccion_2.png)

---
### **Làser escàner**

![bg contain](../assets/hds/building_bim.png)


---
### Tipus d'escàner
![bg contain](../assets/tipos_escaner.png)

---
### Tipus d'escàner: **estàtics**
![bg contain](../assets/family_scan.png)

---
## Precisió
![bg contain](../assets/hds/calidad_nube.png)

---
<!--_backgroundColor: black-->
<!--_color: white-->

### Exemple

[![w:600 center](../assets/tarazona.PNG)](https://3dscanner.threedcloud.com/visor/viewer.php?tk=tarazona)

---

### **Planificació presa de dades**

![w:800](../assets/proyecto_R360.png)

---
### Processament / Registre
![w:800](../assets/hds/alinear.PNG)

---
### Processament / Registre
![w:900 center](../assets/hds/alinear_error.PNG)

---

## Formats d'entrega

| Tipus                 | Format        |
| --------------------- | ------------- |
| Núvol de punts        | e57, LAS, rcp |
| Ortoalçat             | TIFF          |
| Malla 3D texturitzada | FBX, OBJ      |

---

### Fluxe de treball
![w:800 center](../assets/hds/solucion_rtc360_2.png)

---
#### **¿Fotogrametria vs Làser escàner?**

|   Presició   | Coordenades | Tipus de dades |
| :----------: | :---------: | :------------: |
|   Mètrica    |  Absolutes  | Núvol de punts |
| Centimètrica |  Relatives  |     Malla      |
| Milimètrica  |      -      |    Imatges     |

---

<!--_backgroundColor: black-->
<!--_color: white-->
<!--_header: De què anem a xarrar -->

# Examples Projectes

---

##### Seguiment glaciar [Monteperdido](https://youtu.be/LmFXOKf-TKE)

[![](../assets/monteperdido.png)](https://tecnitop.threedcloud.com/visor/viewer.php?tk=moneP)

---
##### Documentació Patrimoni: **Castillo Santed**

[![w:800 center](../assets/castillo_santed/nube_pers.PNG)](https://3dscanner.threedcloud.com/visor/viewer.php?tk=borobio1)

---

##### Documentació Patrimoni: **Castillo Santed**

[![w:550 center](../assets/castillo_santed/nube_top.PNG)](https://3dscanner.threedcloud.com/visor/viewer.php?tk=borobio1)

---

##### Documentació Patrimoni: **Castillo Santed**

[![w:600 center](../assets/castillo_santed/escaner.PNG)](https://3dscanner.threedcloud.com/visor/viewer.php?tk=santed)

---

##### Documentació Patrimoni: **Hispaniés**

[![w:800](../assets/hispanies.PNG)](https://sketchfab.com/3d-models/hispanies-d3443796fbd045e084ef0b3f96532710)

---

##### Teledetecció amb drons **Seguiment plantacions**

![w:800](../assets/ndvi.png)

---

##### Teledetecció amb drons **Inspecció plaques solars**

![w:800](../assets/termic_ebeex.png)

---
##### Documentació Patrimoni [**La Grotte du Bruniquel**](https://3dscanner.threedcloud.com/visor/viewer.php?tk=Bruni)

<div align="center">
<video src="../assets/bruni.mp4" controls width="100%"></video>
</div>
---

##### Documentació Patrimoni [**La Grotte du Bruniquel**](https://3dscanner.threedcloud.com/visor/viewer.php?tk=BRUNI_360)

[![w:800](../assets/BRUIQUEL_360.png)](https://3dscanner.threedcloud.com/visor/viewer.php?tk=BRUNI_360)

---

##### Documentació Patrimoni: **Presa romana Muel**

[![w:800](../assets/muel.png)](https://3dscanner.threedcloud.com/visor/viewer.php?tk=fanlo_y_cabetas)

---
##### Documentació Patrimoni: **Torre Trovador**

[![w:600 center](../assets/torre_trovador.PNG)](https://sketchfab.com/3d-models/torre-trovador-panel-1-0fb6841325f14c75b9a2ab4ce4782967)

---

##### Documentació Patrimoni: **Pavés**

![bg left](../assets/paves/merge.png)
[![w:400 center](../assets/paves/firma_der_graf.png)](https://3dscanner.threedcloud.com/visor/viewer.php?tk=pave)

---

##### Documentació Patrimoni: **Dolmen**

[![w:800](../assets/dolmen_guadalperal.PNG)](https://3dscanner.threedcloud.com/visor/viewer.php?tk=dolmenG)

---

##### Documentació Patrimoni: **uzbekistán**

[![w:650 center](../assets/horno_f_uz.PNG)](https://sketchfab.com/3d-models/samarkand-horno-e-185eacd3751d4bcbaa92af5a85f919c0)

---
##### Documentació Patrimoni: **Azaila**

[![w:600 center](../assets/visor_azaila.PNG)](https://3dscanner.threedcloud.com/visor/viewer.php?tk=azaila_ter)

---
##### Webmapping & BD: **BD Emirats**
**Objectiu**: Inventariar gravats en roca, prendre coordenades, notes i fotografies. Requisits addicionals:
   - Edició col·lectiva
   - Registre d'usuaris
   - Control de canvis
   - Mode sense connexió
   - Estil personalitzat
---
##### Webmapping & BD: **BD Emirats**

**Solució:** Creació d'una aplicació WEB
   - Versàtil, qualsevol usuari amb un navegador actualitzat la pot utilitzar **sense necessitat de descàrrega**
   - Utilitzar les APIs que permeten l'edició offline de manera senzilla (IndexedDB, Service Workers)

---

![w:800](../assets/app_emiratos/lenguajes.png)
![w:800](../assets/app_emiratos/app_index.png)

---

![w:800](../assets/app_emiratos/app_main.png)
![w:800](../assets/app_emiratos/app_location.png)

---
![w:800](../assets/app_emiratos/app_smallmenu.png)
![w:800](../assets/app_emiratos/app_info.png)

---
<!--![w:800](../assets/app_emiratos/app_layers.png)-->
![w:800](../assets/app_emiratos/app_attrTable.png)

---
<!--![w:800](../assets/app_emiratos/app_popup.png)-->
![w:800](../assets/app_emiratos/app_editpoint.png)

---
### Conservació / restauració: **Estatues Madrid**
![w:800 center](../assets/informe_estatuas/felipeVI_1.JPG)

---

![bg](../assets/informe_estatuas/felipeVI_6.JPG)
![bg](../assets/informe_estatuas/felipeVI_7.JPG)

---
<!--_backgroundColor: black-->
![bg contain](../assets/informe_estatuas/repCuba_5.JPG)

---
<!--_backgroundColor: black-->
![bg fit](../assets/informe_estatuas/repCuba_7.JPG)

---
<!--_color: white-->

### Topografia / enginyeria: [Presa](https://drive.google.com/drive/folders/1HQWN_GZCStU0381rD8K9AoG18ur3-HpG?usp=sharing)
![bg](../assets/santolea.PNG)

---

### Topografia / enginyeria: **Fuente del Berro**

[![w:600 center](../assets/fBerro/entrada.PNG)](https://tecnitop.threedcloud.com/visor/viewer.php?tk=fuenteBerro)

---

### Topografia / enginyeria: **Fuente del Berro**

[![w:600 center](../assets/fBerro/entrada_img360.PNG)](https://tecnitop.threedcloud.com/visor/viewer.php?tk=fberro)

---

### Topografia / enginyeria

[![w:700 center](../assets/campo_golf.png)](https://tecnitop.threedcloud.com/visor/viewer.php?tk=islantilla)

---
### Realitat virtual: **Sevilla**

<a href= "https://youtu.be/uAZ9hN7vqpg?t=173" ><video src="../assets/laPeste.mp4" controls width="100%"></video></a>

---
### Realitat virtual: **Trucho**
## **Live Demo**

---

## **Live Demo escàner**

---

# Recursos utilitzats:

- [https://marpit.marp.app/](https://github.github.com/gfm/)
- [https://asciiflow.com](https://asciiflow.com)
- [https://docs.decksetapp.com/English.lproj/getting-started.html](Decksetapp)
- [https://shd101wyy.github.io/markdown-preview-enhanced](https://shd101wyy.github.io/markdown-preview-enhanced)
- [https://garrettgman.github.io/rmarkdown/revealjs_presentation_format.html#appearance_and_style](https://garrettgman.github.io)
- [https://rawgit.com/shd101wyy/markdown-preview-enhanced/master/docs/presentation-intro.html](https://rawgit.com/shd101wyy/markdown-preview-enhanced/master/docs/presentation-intro.html)
- [https://mandieq.medium.com/beautiful-presentations-from-markdown-who-knew-it-could-be-so-easy-d279aa7f787a](https://mandieq.medium.com/beautiful-presentations-from-markdown-who-knew-it-could-be-so-easy-d279aa7f787a)
- [https://shd101wyy.github.io/markdown-preview-enhanced/#/diagrams](https://shd101wyy.github.io/markdown-preview-enhanced/#/diagrams)

---

# Recursos útils

- [CloudCompare]()
- [Meshroom]()
- [Blender]()
- [OpenDroneMap]()

---

# Gràcies

[joan.cano@3dscanner.es](joan.cano@3dscanner.es)

![w:600 center](../assets/3dscanner_Spinoff_negro.png)

<style>
img[alt~="center"] {display: block;margin: 0 auto;}
</style>
