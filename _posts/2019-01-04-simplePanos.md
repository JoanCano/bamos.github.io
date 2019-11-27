---
layout: post
title: Cómo hacer visores con Panellum
date:   2019-01-04
categories: [fotografia]
---

Tenemos que tener 4 archivos. Entre ellos están el JS y CSS que se deben descargar de la [página web](https://pannellum.org/). El html lo tenemos que construir nosotros y como no, la imagen también ;).

- panellum.html
- panellum.js
- panellum.css
- imagen

[LINK PANELLUM](https://joancano.github.io/static/projects/web/panos/panellum.html)


Y este sería el código html, fijaros en el contenedor 'panorama':


```
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="joan" >

    <title>Guate</title>

    <link rel="stylesheet" href="pannellum.css">

     <style>
     body, html{
       width: 100%;
       height: 100%;
       margin: 0;
     }
    #panorama {
        width: 100%;
        height: 100%;
    }
    </style>

    <script type="text/javascript" src="pannellum.js"></script>

</head>

<body>

  <div id="panorama"></div>
		<script>
		  pannellum.viewer('panorama', {
			"type": "equirectangular",
			"title":"Escuelita",
			"author":"Joan Cano",
      "panorama": "pano2.jpg",
			"compass": true
			});
		</script>

</body>

</html>
```
