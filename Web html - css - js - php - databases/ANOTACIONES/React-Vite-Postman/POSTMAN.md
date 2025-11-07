
# Guía de Uso de Postman para API Testing

## Funcionalidad General
**Postman** es una herramienta útil para probar APIs y realizar pruebas de frontend. En su interfaz principal, ofrece varias opciones para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando los métodos HTTP:

- **GET**
- **POST**
- **PUT**
- **PATCH**
- **DELETE**
- **Otros métodos**

### Características Principales:
- **Espacio para URLs:** Puedes ingresar la URL que desees testear.
- **Parámetros:** Permite pasar parámetros en las solicitudes.
- **Headers:** Puedes modificar los headers de las solicitudes.
- **Autenticación:** Facilita la prueba de verificaciones o autenticaciones.

### Collections:
- **Guardar:** Puedes guardar las pestañas que tengas abiertas.
- **Exportar/Importar:** Es posible exportar e importar las pestañas donde realizaste pruebas.

---

## Environment

### APIs Públicas: [GoRest API](https://gorest.co.in)
Para usar esta API, necesitarás un token de acceso. Sigue estos pasos:

1. Haz clic en "Get your access token" y procede a iniciar sesión con cualquier método.
2. Después de iniciar sesión, obtendrás una clave primaria (token).

---

## Crear una Collection

1. **Ir al apartado de Collections:** Haz clic en el símbolo "+" en la parte superior izquierda.
2. **Crear una Collection:** Selecciona "Blank Collection" y cambia el nombre con clic derecho, utilizando un formato como "NombreClase + NúmeroDeClase".
3. **Añadir una Petición:** Haz clic en los tres puntos (al lado del nombre) y selecciona "Add request" (C-R-U-D).
4. **Configurar la Autorización:** 
   - Copia el token de acceso.
   - Ve al apartado de Authorization y selecciona "Bearer Token".
   - Pega el token copiado en el campo correspondiente.

**Nota:** Al pegar el token y seleccionar "Bearer Token", obtendrás acceso para consumir los datos de la API.

---

## Realizar una Petición GET

1. **Obtener el Endpoint:** En el apartado de RESOURCES de la página de la API, copia el primer link.
2. **Ejecutar la Petición:** Pega el link en un request GET en Postman y ejecútalo. La respuesta debería ser un array de objetos.

---

## Crear un Usuario con POST

1. **Ir a la Documentación:** Visita la página [GoRest API](https://gorest.co.in) y busca "cURL Examples for REST API".
2. **Copiar el Código de Ejemplo:** Copia el ejemplo "Create User".
3. **Crear un Archivo JSON:** Pega el código copiado en un archivo `.json`.
4. **Configurar la Ruta:** Localiza la ruta `-XPOST "https://gorest.co.in/public/v2/users"` en el código.
5. **Agregar Servicio en Postman:** Pega la ruta en la barra de búsqueda en un método POST en Postman.
6. **Agregar Usuario en JSON:**
   - En la opción "Body" de Postman, selecciona "raw".
   - Pega el objeto JSON del ejemplo:
   ```json
   {"name":"Tenali Ramakrishna", "gender":"male", "email":"tenali.ramakrishna@15ce.com", "status":"active"}
   ```
7. **Manejar Errores:** Si te da un error 401, repite los pasos de autenticación con el token "Bearer Token".
8. **Ejecutar la Petición:** Copia el objeto en el apartado "raw" y ejecuta la solicitud para crear el usuario.

---

## Actualizar un Usuario con PUT

1. **Crear un Request PUT:**
   - Crea otro request en tu collection.
   - Cambia el método de GET a PUT.
2. **Configurar la Ruta:**
   - Copia la URL de "update user" desde la documentación.
   - Añade el ID del objeto a actualizar al final de la URL.
3. **Modificar el Objeto:**
   - En el apartado Body/raw, pega el objeto que deseas modificar.
   - Realiza los cambios necesarios.
4. **Ejecutar la Petición:** Pega la URL con el ID y ejecuta la solicitud para actualizar el usuario.

---

## Eliminar un Usuario con DELETE

1. **Crear un Request DELETE:**
   - Crea una nueva petición en la collection.
   - Copia la URL del "update user" y añade el ID del objeto que deseas borrar.
2. **Ejecutar la Petición:** Pega la URL en el método DELETE y ejecuta la solicitud para eliminar el objeto.

**Con esto habrás completado el ciclo CRUD.**

---