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


## Crear un servidor personal con SSH en Linux

