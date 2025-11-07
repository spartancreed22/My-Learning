
Para consumir esta api https://randomuser.me
Se hará de dos maneras manejando una promesa, o manejando una funcion asincrona

iremos a la url del api que nos dejan mas abajo: "https://randomuser.me/api/"


El fetch se usa para poder consumir un api, o un servicio el cual es traido desde el backend, quien me esta funcion, informacion,o servicio.

    CONSUMIR - MOSTRAR EN LA INTERFAZ


        fetch(apiUrl)
         .then(res => res.json())  //La primera promesa convierte la respuesta en un objeto JSON

         .then(data => {
             console.log(data, 'Datos obtenidos');
             console.log(data.results[0], 'Primer resultado del array');

              //Aquí se actualiza el contenido del elemento con id 'Resultado'
              //Se inserta una imagen utilizando la URL obtenida del primer resultado del array 'results'
             clase.innerHTML = `<img src="${data.results[0].picture.large}" alt="Imagen del usuario">
             <p>${data.results[0].name.first}</p>`;
         })

    Then recordar que la traduccion es "entonces" o "luego"

Para poder consumir en el fronted se usa la funcion de res => la cual va a almacenar los "data" la cua lviene en un formato .json y esto se realiza para poder recibir y ver la data 

