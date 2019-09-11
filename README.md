# Prueba Rithmi Backend

Este repositorio contiene un esqueleto que puedes utilizar para empezar con el desarrollo de la aplicación. Este proyecto está montado sobre una arquitectura de Docker que contiene una base de datos MongoDB con datos de prueba, y un servidor básico de Node.js y Express.

Nota: El uso de este proyecto es opcional, y puedes desarrollar tu aplicación desde cero si lo prefieres.

### Configuración

Es necesario instalar Docker en tu máquina local. Si no lo tienes instalado, sigue uno de los siguientes enlaces para encontrar las instrucciones de instalación:

* [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* [macOS](https://docs.docker.com/docker-for-mac/install/)
* [Windows](https://docs.docker.com/docker-for-windows/install/)

### Lanzar la aplicación

Una vez tengas instalado Docker, puedes lanzar la aplicación con el siguiente comando:

```
docker-compose up
```

El servidor de Node está configurado con Hot Reloading, de forma que cada cambio que guardes reiniciará el servidor automáticamente.

Si realizas algún cambio en el fichero `package.json` o instalas una nueva dependencia `npm` debes reiniciar la aplicación:

```
docker-compose down
docker-compose up
```
