---
layout: post
title: Instalador aplicaciones post-formateo
date: 2017-10-18
author: Joan Cano
categories: [linux]
---

Script en **bash** para la instalación de los programas que suelo utilizar en Linux.

```bash
#!/bin/bash

sudo apt-get update

sudo apt-get install chromium-browser

sudo apt-get install inkscape

sudo apt-get install shutter

sudo apt-get install gimp 

sudo apt-get install gimp-gmic

sudo apt-get install gimp-ufraw

sudo apt-get install gimp-plugin-registry

sudo apt-get install synapse

sudo apt-get install keepassx

sudo apt-get install ruby-full

sudo apt-get install gedit

sudo apt-get install sublime-text

sudo apt-get install darktable

sudo apt-get install scribus

sudo apt-get install git

sudo apt-get install plank

sudo apt-get install imagemagick

sudo apt-get install obs-studio

sudo apt-get install snap

sudo apt-get install pdfsam-basic

sudo apt-get install telegram-desktop

sudo apt-get install kate


# QGIS
## autorizar clave repositorio
wget -O - http://qgis.org/downloads/qgis-2017.gpg.key | gpg --import
gpg --fingerprint CAEB3DC3BDF7FB45
gpg --export --armor CAEB3DC3BDF7FB45 | sudo apt-key add -

# QGIS Latest Release

sudo echo '# QGIS Latest Release' /n
deb     https://qgis.org/ubuntu-ltr bionic main /n
deb-src https://qgis.org/ubuntu-ltr bionic main > /etc/apt/sources.list.d/qgis-latest.list

sudo apt-get update
sudo apt -y upgrade

# (2) QGIS y dependencias

sudo apt install -y qgis qgis-plugin-grass

```
