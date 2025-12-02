# Creacion del proyecto paso a paso.

Primero iremos a la url de next.js y luego a el apartado de instalacion ( https://nextjs.org/docs/app/getting-started/installation ).


luego en la carpeta donde queremos almacenar nuestro proyecto abrimos visual studio y en la terminal ejecutamos el siguiente comando:

    npx create-next-app@latest 

Y personalizaremos con las siguientes opciones:

![alt text](image.png)

Ahora haremos la configuracion con prisma por lo que nos dirigiremos a su web ( https://www.prisma.io/docs/guides/nextjs ).

Luego seguiremos el paso a paso que nos provee esta pagina, teniendo en cuenta esto entonces instalaremos las respectivas dependencias de prisma:

    npm install prisma tsx @types/pg --save-dev
    npm install @prisma/client @prisma/adapter-pg dotenv pg

Asegurate de tener instalado bien prisma y usar el siguiente comando:

    npm install prisma@5.15.0 --save-dev

Luego de esto escribiremos el siguiente comando para generar el apartado de prisma en nuestro proyecto:

    npx prisma init --datasource-provider sqlite --output ../generated/prisma

luego de que no nos salga ningun error entonces, buscaremos las carpetas creadas dentro de la carpeta prisma.


Dentro de ella podremos visualizar muchos archivos y uno de ellos podremos ver la configuracion del cliente y su generacion y además la configutacion de la base de datos, y un archivo creado llamado .env podremos encontrar los archivos fisicos que se guardaran de las bases de datos.


Ahora crearemos los schemas o modelos para hacer la base de datos:

model Contrasenia{
    id String
}

