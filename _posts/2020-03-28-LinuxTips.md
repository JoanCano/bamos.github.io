---
layout: post
title:  "Linux tips"
date:   2020-03-28
categories: [linux]
---


## SSH basics

PC amb el que em conecte
sudo apt install openssh-client

server al que em conecte
sudo apt install openssh-server

chequear si está funcionando
sudo systemctl status ssh

Fijarse si está activo, sino activarlo manualmente
sudo systemctl start ssh

tendremos que saber la ip de nuestro pc.
chequear nuetra ip interna

en nuestro server
ip a

check open ports
sudo lsof -i -P -n | grep LISTEN

si no está abierto, hay que abrirlo
sudo ufw allow 22
sudo ufw status

conectar con el server
ssh user@XX.XXX.XX.XXX
ssh root@XX.XXX.XX.XXX 

conectar de manera gráfica con el server
ssh -X user@XX.XXX.XX.XXX 

transferir archivos local a server

scp /home/joan user@XX.XXX.XX.XXX:/home/server

transferir archivos server a local
scp user@XX.XXX.XX.XXX:/home/server /home/joan

This will create a key-pair (a public and private key) in ~/.ssh/. Keep the private key (id_rsa) on the PC and never share it.
$ ssh-keygen

ssh-copy-id
$ ssh-copy-id pi@192.168.1.20

Graphically manage SSH keys with Seahorse

firewall
1. ufw /gufw
install gufw and enable . este es un interfaz gráfico

por terminal
sudo ufw enable
ufw status verbose
sudo ufw allow ssh


2. iptables


**Rename**

`$ rename file.txt fileRename.txt`

**Leer archivos grandes por terminal**

`$ zcat file.txt | less`


**Listar y obtener información de tamaño archivos**

```
$ ls -l
$ ls -lh
$ ls -a
$ ls -lS
$ ls -r
$ ls -lahSr
$ ls *.csv
$ ls f*
$ ls [Ff]*
$ ls [!Ff]*
$ ls file?.txt
$ ls [[:alpha:]]*
$ ls [[:digit:]]*
$ ls [s1].txt

$ wc -l file.txt

```

**Print working directori - pwd**
```
$ ls
$ cd ..
$ cd ../..
$ ~/ *vuelve a la /home*
$ cd - *vuelve al directorio anterior*
```

**Escribir en terminal**

`$ cat texto`

**Básicos**

``` 
$ rm removeFile.txt
$ rm -r removeDirectorio.txt  
$ cp rmoveFile.txt  /directorio/salida
$ cp -i rmoveFile.txt  (tiene en cuenta si sobreescribe algo)

$ mv rmoveFile.txt  /directorio/salida
$ mkdir CreaDirectorio
```

**Filtros**

```
+ sort: ordena alfabéticamente
+ uniq: lista los únicos
 + uniq -d: para los duplicados
+ grep: filtro
+ -w: busca solo la palabra que le demos
+ wc: estadísticas
```

**echo**

```
$ echo esto se va a a escribir en el siguiente fichero de texto > file.txt
$ cat file.txt

$ echo $USER
$ echo $((2+6))
$ echo {A..Z}
$ echo {A,B,C}
$ echo file_{1,2,3}
$ echo dir_{1,2,3}
$ echo \$10€  *para carácteres*
$ \n *new line*
```


**Links**
```
$ ln file1 hardLink
$ ln file1 softLink
```
**Tipos de comandos**
+ type

+ which - dónde se encuentra

+ help - ayuda
 + cd --help
 + ls --help

+ man - manual de la herramienta
 + man cd

+ apropos - ayuda para comandos
 + apropos password
 + man -k (es lo mismo)

+ info - documentación

+ what is

**Ejecutar tus propios comandos**
`$ alias ll = 'ls -l' `

*El archivo con las nuevas configuraciones está en ~./bashrc*


**Estructura /**
|/bin	| Archivos binarios, ejecutables
|/boot	| Kernel, Grub
|/dev	| Dispositivos
|/etc	| Configuración
|/home	| Usuario
|/lib	| Librerías programas
|/lost+found	| Recovery
|/media	| Dispositivos montados automáticamente
|/mnt	| Dispositivos montados manualmente
|/opt	| Software comercial opcional
|/proc	| kernel
|/root	| Home Root
|/run	| temporales
|/sbin	| Binarios que ejecuta Root
|/srv	| servicios
|/tmp	| temporales
|/usr	| binarios del user
|/var	| archivos que varían



**Crear ejecutables**

```
# Nos dirigimos a /usr/share/applications/
# Creamos el archivo nombreEjecutable.desktop

#!/usr/bin/env xdg-open
[Desktop Entry]
Version=1.0
Type=Application
Terminal=false
Exec=/home/user/folderName/nombreAplicacion.AppImage
Name=nombreApp
Comment=Descripcion de tu App
Icon=/ruta/a/tu/imagen.png
```

Luego tendremos que hacer el archivo creado como ejecutable. Una vez hecho debe estar disponible en tu menú de aplicaciones.
`$ sudo chmod +x /usr/share/applications/nombreEjecutable.desktop`

De una manera más sencilla, si no queremos iconos y solo ejecutar la aplicaciones desde la terminal:

```
# Crea y dirígete a /usr/local/bin/nombreApp y pega el siguiente código
/home/user/directorio/aplicación.AppImage

# Haz el archivo ejecutable
$ sudo chmod +x /usr/local/bin/nombreApp
```

## Crear un servidor personal con SSH en Linux

