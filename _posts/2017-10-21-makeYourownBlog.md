---
layout: post
title:  "¿Cómo crearte un blog personal con Jekyll?"
date:   2017-10-21
categories: [jekyll]
---

Hay muchas posibilidades para la creación de blogs personales, siendo Wordpress o Blogspot de los más utilizados, sin embargo, ¡hay alternativas!.

Una de las que más me gusta es [Jekyll](https://jekyllrb.com/), aunque [Hugo](https://themes.gohugo.io/) también es una buena opción. Jekyll es a grandes rasgos un generador de páginas web estáticas, con una serie de ventajas que lo diferencias de otros modos de hacerte un blog:

- La facilidad de edición de nuevos post mediante lenguaje markdown (en algún editor de escritorio como Atom o Haroopad), o a partir de otros editores web como [prose.io](http://prose.io/).
- Tiene una rápida y fácil instalación que más abajo se detalla
- Gran cantidad de [temas/plantillas predefinidas](http://jekylltheme.org/)
- La posibilidad de alojarlo en páginas como Github o Gitlab, permitiendo tener un espacio en la web

En el caso de que queramos visualizar el resultado de nuestro blog, podemos montar Jekyll en nuestro ordenador (con linux) o servidor. Por otro lado, si el destino del blog es subirlo a github, no hace falta realizar este paso, tan solo hay que modificar los archivos necesarios y subir tus nuevos posts en formato markdown.


### Pre-instalación Jekyll. Requisitos
* Un SO GNU/Linux o macOS
* Tener instalado git

```bash
$ sudo apt-get install git
```

* La versión de Ruby 2.1 o superior

``` bash
$ sudo apt-get install ruby ruby-dev make gcc
```
* Las RubyGems. Si no tienes las RubyGems instaladas, puedes hacerlo manualmente descargándolas desde esta [página](https://rubygems.org/pages/download#formats)

```bash
# Entrar (cd) a la carpeta descargada y descomprimida y ejecutar
$ ruby setup.rb
```

En el caso de que las tengas, únicamente actualízalas:

```bash
# Tienes que ser administrador o root
$ gem update --system  
```

* Comprueba que GCC y Make se han instalado

```bash
gcc -v
make -v
```

## Instalación de Jekyll

```bash
# Instalación de Jekyll
$ gem install jekyll bundler

# Comprobar si se ha instalado bien
$ jekyll --version
$ gem list jekyll

# Comprobar si bundle está instalado
$ bundle update jekyll
$ bundle -v

# Si tienes problemas con la gema nokogiri ( )
$ sudo apt-get install build-essential patch ruby-dev zlib1g-dev liblzma-dev
$ gem install nokogiri
```
[Fuente](https://nokogiri.org/tutorials/installing_nokogiri.html)

También puedes probar a actualizar las gemas
$ bundle update && bundle install

### Descargar repositorios y realizar cambios

A modo de ejemplo voy a simular que descargo el repositorio donde tengo alojado mi blog, el cual es un fork de uno de los muchos temas de Jekyll.

```bash
git clone https://github.com/JoanCano/joancano.github.io.git

# Entraría a la carpeta del blog
$ cd joancano.io/
# Ejecutaría el siguiente comando para evitar fallos de gemas en mi repo
$ bundle update github-pages
```
En este punto es cuando crearíamos el nuevo post dentro de la carpeta ```_post```, donde guardaremos las nuevas publicaciones. Estas deben deben seguir el siguiente formato:  ```YEAR-MONTH-DAY-title.md```

La carpeta ```_site``` es donde se generarán los nuevos post una vez sean transformados por Jekyll.

Cada post empezará de la siguiente manera, escrito en markdown:

```markdown
---
#!markdown
layout: post
title:  "Welcome to Jekyll!"
date:   2015-11-17 16:16:01 -0600
categories: jekyll update
---
```
### Visualización del blog

Como se ha descargado el blog desde Github, lo primero será iniciar el repositorio en git.

```bash
cd joancano.github.io
git init
```
Jekyll también viene con un servidor de desarrollo incorporado que te permitirá previsualizarlo cómo en tu navegador localmente.

```bash
$ bundle exec jekyll serve
```

En caso de que no nos permita visualizarlo, es por los permisos del navegador. Tenemos que activar el puerto 4000.

```
$ sudo ufw allow 4000
```

Ya tenemos nuestro blog corriendo en [local](http://localhost:4000/joancano.github.io/)!. Ahora solo tendremos que subirlo a Github para poder tener nuestro blog en la web.
