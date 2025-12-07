## Primer Hola Mundo.

Al realizar un simple hola mundo tendremos que tener en cuenta que despues de crear nuestro archivo .html y luego conectarlo a nuestro archivo .ts, al correrlo debemos identificar que el codigo que hagamos en ts lo tendremos ce transpirar (traducir) a condigo en JavaScript, para esto debemos hacer lo siguiente.


Debemos compilar cada archivo que realicemo de la siguiente forma, nos vamos a la terminal del visual y corremos el siguiente comando:

    tsc (nombre del archivo).ts (opcional)


esto lo haremos al terminar nuestro archivo ts para que me traduzca o me genere mi archivo a JavaScript, podremos ver que es casi el mismo codigo pero con las debidas diferencias de Ts.

si no te deja corre este comando es debido a que necesitas permisos por lo que debes usar este comando antes:

    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser


Ahora vamos a personalizar el archivo de configuracion de TypeScript y es llamado TSConfig.json, para esto primero debemos de generarlo de la siguiente forma:
    tsc --init

Al correr el comando nos dara el mensaje de que todo se ejecuto con exito, como podemos observar este archivo debe ser tipo json y debe seguir este formato.

Por ejemplo usar las comillas dobles para definir las propiedades, demas de caracteristicas propias pero en la primera linea de codigo podemos ver un link con las diferentes especificaciones, pero en resumen este archivo configura nuestro TypeScript y nos dice variedad de cosas, como el objetivo a fin del codigo o la version de ECMAscript u otros estandares.

Al instalar el configurador, nos ayudara a personalizar nuestro Typescript y aparte nos ayuda a automatizar el proceso de transpilacion a js con solamente usar el comando:  tsc.


## Modo Observador

Este modo nos sirve para visualizar lo que haremos con nuestro codigo antes de usar el comando para transpirar a Js, ejecutando la compilacion de forma automatica.

    tsc --watch || tsc --w

Con esto pasaremos nuestro Ts a modo visualizacion, para esto usaremos el simbolo de la x en laterminal