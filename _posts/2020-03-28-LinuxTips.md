---
layout: post
title:  "Linux tips"
date:   2020-03-28
categories: [linux]
---

## SSH basics

```bash
# Instalar SSH 
$ sudo apt-get install ssh
```
```bash
# Instalar SSH en el PC cliente
$ sudo apt install openssh-client
```
```bash
# Instalar SSH en el servidor
$ sudo apt install openssh-server
```
```bash
# Comprobar si está funcionando
$ sudo systemctl status ssh
```
```bash
# Activarlo manualmente
sudo systemctl start ssh
```
```bash
# ip de mi pc
$ ip a
```
```bash
# puertos abiertos
$ sudo lsof -i -P -n | grep LISTEN
 ```
 ```bash
# abrir puerto (por defecto 22)
$ sudo ufw allow 22
$ sudo ufw status
```

## Conectar con servidor
```bash
$ ssh user@XX.XXX.XX.XXX
$ ssh root@XX.XXX.XX.XXX
$ ssh -CX usuario@servidor_remoto
$ ssh -p 1234 user@host
```
+ `-C` comprime la conexión
+ `-X` permite redireccionar servidor X
+ `-p` especifica el puerto

```bash
## Conectar de manera gráfica
$ ssh -X user@XX.XXX.XX.XXX
```
```bash
# transferir archivos local a server
$ scp /home/user user@XX.XXX.XX.XXX:/home/server
$ scp -P 22 /home/user user@XX.XXX.XX.XXX:/home/server
```
```bash
# transferir archivos server a local
$ scp user@XX.XXX.XX.XXX:/home/server /home/user
```
```bash
# Crear par de claves (pública y privada) en el directorio ~/.ssh/. Mantenga la clave privada en la PC y nunca la comparta
$ ssh-keygen
```
```bash
#  Copiar mi clave pública en el servidor
$ ssh-copy-id -i ~/.ssh/mykey user@host
```

```bash
# Si ha cambiado la key y da un error, incluir comando
$ ssh-add
```
```bash
# Correr comando de manera remota o mediante un script
$ ssh user@server *my_command*
$ ssh user@server 'bash -s' < local_script.sh
```

# Conocer los dispositivos conectados a la red WiFi
```bash
# Detect computers with nmap
$ apt install nmap
$ nmap -sn 192.168.1.0/24
$ nmap -sn -oG Name.txt 192.168.1.1-255
$ ping  -b 192.168.1.255
```

**Manejar las claves SSH gráficamente con Seahorse**

`$ sudo apt install seahorse`

**Editar el archivo de configuración del servicio SSH**

`$ sudo nano /etc/ssh/sshd_config`

**Después de editar, reiniciar el servicio SSH**

`$sudo /etc/init.d/ssh restart`


**Proceso de identificación - NO permitir acceso root**
```bash
	# Authentication:
	LoginGraceTime 30
	PermitRootLogin no
```
```bash
# número de intentos de identificación
$ MaxAuthTries 2
```

```bash
# número de accesos simultáneos
$ MaxStartups 2
```

**ConnectBot para android. Generar la clave y pegar la clave pública en el servidor**

`$ echo "ssh-rsa AAA[...]KqwAgw username" >> .ssh/authorized_keys`

## Configuración en servidor

Para que se pueda usar el sistema de archivo de claves debe estar activo en el servidor SSH. Comprobar en el archivo de configuración /etc/ssh/sshd_config si están las siguientes líneas:

```bash
RSAAuthentication yes
PubkeyAuthentication yes
```

Una vez realizado el trasbase de claves se puede deshabilitar el acceso por medio de contraseña editando el archivo `/etc/ssh/sshd_confi`g con los siguientes valores:

```bash
PasswordAuthentication no
ChallengeResponseAuthentication no
```

Las claves públicas (el texto que las identifica) de los usuarios conocidos se archivan en el archivo `/home/user/.ssh/authorized_keys`

## Montar directorio remoto: `sshfs`

Crear primero punto de montaje y darle privilegios de lectura y escritura a todos los usuarios que vayan a usarlo.

```bash
$ sshfs server@XXX.XXX.X.XX:/media/mediaName/ /media/mediaName/
```

**Incluir en /etc/fstab**
```bash
$ server@192.168.1.37:/media/mediaName  /media/mediaName  fuse.sshfs defaults,allow_other,_netdev    0  0
```

Con el sistema anterior hay que incluir el fichero llave de usuario root o habrá que correr `sudo mount -av` y nos lo pedirá.


## SSH Tunnel - Redirigir puertos: `ssh -L` y `ssh -R`

+ locales (-L) 
+ remotos (-R)


## Puertos locales `-L`

```bash
$ ssh -L <LP>:<RH>:<RP> username@host` 

# RP - Remote Port; RH - Remote Host

$ ssh -L your_port:site_or_IP_to_access:site_port username@host`
```

__Ejemplo 1__: redirigir puerto 9091 remoto al 9091 local

`$ sudo ssh -N username@server -L 9091:localhost:9091`

__Ejemplo 2__: redirigir Postgres (5432) de servido con puerto 9000 a pc 

`$ ssh -L 9000:localhost:5432 user@server`

### Conectar a Postgres
`$ psql -h localhost -p 9000`


## Puertos remotos `-R`

```bash
$ ssh -R <RP>:<LH>:<LP> <RH>

-R [bind_address:]port:host:hostport
```

### Redirigir un puerto de local a server

__Ejemplo 1__: redirigir puerto 22 local a puerto 2223 del server

`$ ssh -o ServerAliveInterval=120 -q -N -R 2223:localhost:22 -f user@server`


Opciones:
- comprobar conexión cada 120 segundos: `-o ServerAliveInterval=120` 
- quiet mode (sin mensajes emergentes): `-q` 
- no ejecutar comando en remoto (solo para reenvio de puertos): `-N` 
- puerto 2223 remoto será el 22 local: `-R 2223:localhost:22` 
- Requests ssh to go to background just before command execution: `-f`

```bash
# Acceder a tu equipo tras el firewall a través de ssh al puerto redirigido
$ ssh localhost -p 2223` si ya estás en el servidor remoto
```

## SSH a través de proxy (1): `ssh -t`

`ssh -t user@server ssh localhost -p 2223`

- `-t`  Force pseudo-terminal allocation.  This can be used to execute arbitrary screen-based programs on a remote machine, which can be very useful, e.g. when implementing menu services.  Multiple -t options force tty allocation, even if ssh has no local tty.
- `user@server` usuario del servidor en el que hemos redirigido el puerto.

__Ejemplo 1__: Conectar a servidor redirigido pasando por otro server y su puerto redirigido:

`ssh -t user@ipserver ssh localhost -p 2223`

__Ejemplo 2__: Acceder a server a través de server 

`ssh -t 81.XXX.X.XX ssh -t 167.XXX.XX.XXX`

Añadir opción `-X` para redireccionar las X:

`ssh -tX 81.XXX.X.XX ssh -tX 167.XXX.X.XX`

## SSH a través de proxy (2): `ssh -o ProxyCommand`

`ssh -o ProxyCommand="ssh user@proxy_server -W %h:%p" user@target_server`

__Ejemplo 1__: Acceder a 161.XXX.XXX.XXX, a través de 81.XXX.XXX.XXX: 

`ssh -o ProxyCommand="ssh 81.XXX.XXX.XXX -W %h:%p" 161.XXX.XXX.XXX`

## Configurar SSH para redirecciones: `~/.ssh/config`
Se puede hacer con la edición de `~/.ssh/config` y una entrada por servidor como se muestra en el siguiente ejemplo:

```bash
	# Server1
Host Server1
HostName XXX.XXX.XXX.XXX
User user
ProxyCommand ssh aguamod.ipe.csic.es nc %h %p

	#Server2
Host Server2
HostName XXX.XX.X.XX
User user
ProxyCommand ssh user@XXX.XXX.XXX.XXX.XX -W %h:%p
```
## Usar tunel SSH como proxy: `ssh -D`

Permite redirigir la información de un puerto local al mismo puerto remoto. Por ejemplo para navegar por internet.
`ssh -D 8080 username@sshd_server`

- `-D [bind_address:]port`. Specifies a local “dynamic” application-level port forwarding. This works by allocating a socket to listen to port on the local side, optionally bound to the specified bind_address.  Whenever a connection is made to this port, the connection is forwarded over the secure channel, and the application protocol is then used to determine where to connect to from the remote machine.  Currently the SOCKS4 and SOCKS5 protocols are supported, and ssh will act as a SOCKS server.  Only root can forward privileged ports. Dynamic port forwardings can also be specified in the configuration file.

Más info en: [Proxy Using SSH Tunnel - SysTutorials](https://www.systutorials.com/944/proxy-using-ssh-tunnel/)


### Cerrar redirecciones de puertos

Matar redirección de puertos:

```bash
# Buscar los procesos
$ ps -eo pid,args | grep 'ssh -N' | grep -v  'grep'`
```

Parar el tunel:
- buscar el proceso en background: `$ ps aux | grep 2223`
- matar el proceso: `$ kill -9 <pid>`

no termina de funcionar, este es cierre de todo ssh: `$ sudo killall ssh`

Más info en: [mysql - How to close this ssh tunnel? - Stack Overflow](https://stackoverflow.com/questions/9447226/how-to-close-this-ssh-tunnel#9532938)


### SSH como _VPN_: sshuttle

`sshuttle` es la mejor alternativa a usar ssh como VPN al redirigir todo el tráfico a través de la máquina remota.

`$ sshuttle -r user@server 0/0 -x server`


Más info en: [Usage — sshuttle 0.78.4 documentation](https://sshuttle.readthedocs.io/en/stable/usage.html)


### Problemas de conexión

```bash
# conectarse si hay varias firmas públicas
$ ssh -i some_id_rsa -o 'IdentitiesOnly yes' them@there:/path/

$ ssh -i .ssh/id_rsa.pub -o 'IdentitiesOnly yes' xxxx.duckdns.org 
# por ejemplo
$ ssh -o PubkeyAuthentication=no ip.server
```

## Firewall

1. ufw /gufw: con interfaz gráfico

`$ install gufw and enable`

Activar y permitir conexión por ssh
```bash
sudo ufw enable
ufw status verbose
sudo ufw allow ssh
```

# Linux Basic Commands

**Rename**: `$ rename file.txt fileRename.txt`

**Leer archivos grandes por terminal**: `$ zcat file.txt | less`


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
```bash
$ ls
$ cd ..
$ cd ../..
$ ~/ *vuelve a la /home*
$ cd - *vuelve al directorio anterior*
```

**Leer contenido archivo**: `$ cat file`

**Básicos**

``` bash
$ rm removeFile.txt
$ rm -r removeDirectorio.txt  
$ cp rmoveFile.txt  /directorio/salida
$ cp -i rmoveFile.txt  (tiene en cuenta si sobreescribe algo)

$ mv rmoveFile.txt  /directorio/salida
$ mkdir CreaDirectorio
```

**Filtros**

```bash
+ sort: ordena alfabéticamente
+ uniq: lista los únicos
 + uniq -d: para los duplicados
+ grep: filtro
+ -w: busca solo la palabra que le demos
+ wc: estadísticas
```

**echo**
```bash
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
```bash
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

Directorio | Función
------- | -------
|/bin   | Archivos binarios, ejecutables
|/boot  | Kernel, Grub
|/dev   | Dispositivos
|/etc   | Configuración
|/home  | Usuario
|/lib   | Librerías programas
|/lost+found  | Recovery
|/media | Dispositivos montados automáticamente
|/mnt   | Dispositivos montados manualmente
|/opt   | Software comercial opcional
|/proc  | kernel
|/root  | Home Root
|/run   | temporales
|/sbin  | Binarios que ejecuta Root
|/srv   | servicios
|/tmp   | temporales
|/usr   | binarios del user
|/var   | archivos que varían



### Crear ejecutables de aplicaciones

```bash
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

```bash
# Crea y dirígete a /usr/local/bin/nombreApp y pega el siguiente código
/home/user/directorio/aplicación.AppImage

# Haz el archivo ejecutable
$ sudo chmod +x /usr/local/bin/nombreApp
```

### Bibliografía

+ [Miguel Sevilla Callejo](https://github.com/msevilla00)

+ [Manual SSH: El dios de la administración remota](https://tuxpepino.wordpress.com/2007/05/11/ssh-el-dios-de-la-administracion-remota/)

+ [Easy Way To Copy Files Over SSH](https://serversuit.com/community/technical-tips/view/easy-way-to-copy-files-over-ssh.html)

[linux - Port forwarding / SSH tunneling - explain this to a beginner - Server Fault](https://serverfault.com/questions/286243/port-forwarding-ssh-tunneling-explain-this-to-a-beginner)

- [SSH Tunnel - Local and Remote Port Forwarding Explained With Examples - Trackets Blog](https://blog.trackets.com/2014/05/17/ssh-tunnel-local-and-remote-port-forwarding-explained-with-examples.html)

- [ssh: tunnel through remote server to another server - Stack Overflow](https://stackoverflow.com/questions/29742454/ssh-tunnel-through-remote-server-to-another-server)

- [SSH ProxyCommand example: Going through one host to reach another server - nixCraft](https://www.cyberciti.biz/faq/linux-unix-ssh-proxycommand-passing-through-one-host-gateway-server/)
- [Manual SSH: El dios de la administración remota](https://tuxpepino.wordpress.com/2007/05/11/ssh-el-dios-de-la-administracion-remota/)

- [Getting Started with SSH - Semaphore](https://semaphoreci.com/community/tutorials/getting-started-with-ssh)

- [Secure login linux server](/http://www.farinspace.com/secure-login-linux-server/)

- [Arch Linux Wiki - SSH Keys](https://wiki.archlinux.org/index.php/SSH_keys)

## a revisar

- [SSH: Heaven or Shell | LUP 157 | Jupiter Broadcasting:](http://www.jupiterbroadcasting.com/101821/ssh-heaven-or-shell-lup-157/)

- [Useful things you can make SSH do | Hacker News](https://news.ycombinator.com/item?id=1536126)

- [5 Cool Things You Can Do With an SSH Server](https://www.howtogeek.com/114812/5-cool-things-you-can-do-with-an-ssh-server/)

- [How to Use SSH Pipes on Linux](https://www.maketecheasier.com/ssh-pipes-linux/)

- [Layer 2 VPN’s using SSH | Hacks by Brandon:](https://la11111.wordpress.com/2012/09/24/layer-2-vpns-using-ssh/)