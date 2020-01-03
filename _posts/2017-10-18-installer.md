---
layout: post
title: Instalador aplicaciones post-formateo
date: 2017-10-18
author: Joan Cano
categories: [linux]
---

Script básico en **bash** para la instalación de los programas que suelo utilizar en Linux.

```bash
#!/bin/bash

sudo apt-get update

sudo apt-get install chromium-browser

sudo apt-get install inkscape

sudo apt-get install shutter

sudo apt-get install fish

sudo apt-get install gimp

sudo apt-get install synapse

sudo apt-get install geany

sudo apt-get install virtualbox

sudo apt-get install ruby-full

# QGIS

```bash
## autorizar clave repositorio
$ wget -O - http://qgis.org/downloads/qgis-2017.gpg.key | gpg --import
$ gpg --fingerprint CAEB3DC3BDF7FB45
$ gpg --export --armor CAEB3DC3BDF7FB45 | sudo apt-key add -

# QGIS Latest Release
$ sudo sh -c 'echo "# QGIS Latest Release
$ deb     http://qgis.org/ubuntugis $(xenial -sc) main
$ deb-src http://qgis.org/ubuntugis $(xenial -sc) main" > /etc/apt/sources.list.d/qgis-latest.list'

$ sudo apt update
$ sudo apt -y upgrade

# (2) QGIS y dependencias
$ sudo apt install -y python-software-properties qgis python-qgis qgis-plugin-grass

$ sudo apt-get install keepassx

```
