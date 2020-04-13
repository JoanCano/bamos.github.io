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

sudo apt update

sudo apt install snapd -y

sudo apt install wget

sudo apt install chromium -y

# Instalar vscodium
wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg | sudo apt-key add - 
sudo echo 'deb https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/repos/debs/ vscodium main' | sudo tee --append /etc/apt/sources.list.d/vscodium.list 

sudo apt update && sudo apt install codium 

sudo apt install inkscape -y

sudo apt install shutter -y

sudo snap install gimp  -y

sudo apt install gimp-gmic -y

sudo apt install gimp-ufraw -y

sudo apt install gimp-plugin-registry -y

sudo apt install synapse -y

sudo apt install keepassx -y

sudo snap install codium -y

sudo snap install darktable -y

sudo apt install git -y

sudo apt install latte -y

sudo apt install imagemagick -y

sudo apt install obs-studio -y

sudo snap install gitkraken

# instalar Insync
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys ACCAF35C

sudo echo 'deb http://apt.insync.io/debian buster non-free contrib' > /etc/apt/sources.list.d/insync.list 
sudo apt-get update
sudo apt-get install insync

sudo apt install pdfsam -y

sudo apt install telegram-desktop -y

sudo apt install kate -y

sudo snap install blender --classic

sudo snap install cloudcompare

# QGIS
## autorizar clave repositorio
wget -O - https://qgis.org/downloads/qgis-2019.gpg.key | gpg --import

gpg --fingerprint 51F523511C7028C3

gpg --export --armor 51F523511C7028C3 | sudo apt-key add -

# QGIS Latest Release

sudo echo '# QGIS Latest Release
deb     https://qgis.org/debian-ltr buster main
deb-src https://qgis.org/debian-ltr buster main ' > /etc/apt/sources.list.d/qgis-latest.list

# (2) QGIS y dependencias
sudo apt update
sudo apt install -y qgis qgis-plugin-grass  -y

sudo apt update
sudo apt -y upgrade 
```
