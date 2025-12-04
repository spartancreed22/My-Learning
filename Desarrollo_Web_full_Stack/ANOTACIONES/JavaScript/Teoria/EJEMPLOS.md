Claro, te explicaré cómo se originan y utilizan las variables en el código que te proporcioné para encontrar al estudiante con el promedio más alto y filtrar los estudiantes mayores de 20 años.

### **Código Completo:**
```javascript
const estudiantes = [
  {
    nombre: "Ana",
    edad: 20,
    promedio: 85,
    genero: "Femenino",
    carrera: "Ingeniería Civil",
    ciudad: "Bogotá",
  },
  {
    nombre: "Juan",
    edad: 22,
    promedio: 78,
    genero: "Masculino",
    carrera: "Medicina",
    ciudad: "Medellín",
  },
  {
    nombre: "María",
    edad: 21,
    promedio: 90,
    genero: "Femenino",
    carrera: "Administración de Empresas",
    ciudad: "Cali",
  },
  {
    nombre: "Pedro",
    edad: 23,
    promedio: 82,
    genero: "Masculino",
    carrera: "Derecho",
    ciudad: "Barranquilla",
  },
  {
    nombre: "Laura",
    edad: 24,
    promedio: 88,
    genero: "Femenino",
    carrera: "Arquitectura",
    ciudad: "Cartagena",
  },
  {
    nombre: "Carlos",
    edad: 20,
    promedio: 75,
    genero: "Masculino",
    carrera: "Ingeniería de Sistemas",
    ciudad: "Santa Marta",
  },
  {
    nombre: "Sofía",
    edad: 22,
    promedio: 95,
    genero: "Femenino",
    carrera: "Psicología",
    ciudad: "Pereira",
  },
];

// Encontrar al estudiante con el promedio más alto
const estudianteMejorPromedio = estudiantes.reduce((mejor, estudiante) => {
  return (estudiante.promedio > mejor.promedio) ? estudiante : mejor;
}, estudiantes[0]);

console.log("Estudiante con el promedio más alto:");
console.log(`Nombre: ${estudianteMejorPromedio.nombre}`);
console.log(`Edad: ${estudianteMejorPromedio.edad}`);

// Filtrar estudiantes mayores de 20 años
const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);

console.log("Estudiantes mayores de 20 años:");
estudiantesMayores.forEach(estudiante => {
  console.log(estudiante);
});
```

### **Explicación de las Variables:**

#### 1. **Variable `estudiantes`**
   - **Definición:** Un array de objetos que contiene la información de varios estudiantes.
   - **Contenido:** Cada objeto dentro del array representa a un estudiante y tiene propiedades como `nombre`, `edad`, `promedio`, `genero`, `carrera` y `ciudad`.

#### 2. **Variable `estudianteMejorPromedio`**
   - **Definición:** Utiliza el método `reduce` para encontrar al estudiante con el promedio más alto.
   - **Origen:**
     - **Callback de `reduce`:** `(mejor, estudiante) => (estudiante.promedio > mejor.promedio) ? estudiante : mejor`
       - **`mejor`:** El acumulador que mantiene el estudiante con el mejor promedio encontrado hasta la iteración actual. Inicialmente es el primer estudiante del array (`estudiantes[0]`).
       - **`estudiante`:** El estudiante actual del array `estudiantes` en la iteración actual.
     - **Resultado:** Al finalizar la iteración, `estudianteMejorPromedio` contiene el objeto del estudiante con el promedio más alto.

#### 3. **Variable `estudiantesMayores`**
   - **Definición:** Un array filtrado que contiene solo los estudiantes mayores de 20 años.
   - **Origen:**
     - **Método `filter`:** `estudiantes.filter(estudiante => estudiante.edad > 20)`
       - **Callback de `filter`:** `(estudiante) => estudiante.edad > 20`
         - **`estudiante`:** El estudiante actual del array `estudiantes` en la iteración actual.
         - **Condición:** Filtra los estudiantes cuya `edad` es mayor a 20.
     - **Resultado:** `estudiantesMayores` contiene todos los estudiantes que cumplen con la condición de tener más de 20 años.

#### 4. **Uso de `console.log`:**
   - **Para `estudianteMejorPromedio`:** Imprime el nombre y la edad del estudiante con el promedio más alto.
   - **Para `estudiantesMayores`:** Imprime la información completa de cada estudiante en el array `estudiantesMayores`.

### **Resultado Esperado:**
- **Estudiante con el promedio más alto:** Imprime el nombre y la edad del estudiante con el promedio más alto.
- **Estudiantes mayores de 20 años:** Imprime la información completa de todos los estudiantes cuya edad es mayor a 20.

Este código permite analizar y manipular arrays de objetos de manera eficiente usando los métodos `reduce` y `filter`, y muestra cómo manejar y acceder a los datos en JavaScript.












Claro, a continuación te explico el código del punto 3, que utiliza `map`, `Math.min`, y `find` para encontrar el producto con el precio más bajo:

### Código Alternativo con Comentarios:

```javascript
let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];

// 1. Usamos el método `map` para crear un nuevo array que contiene solo los precios de los productos.
let precios = productos.map(producto => producto.precio);

// 2. Utilizamos `Math.min` para encontrar el precio más bajo en el array `precios`.
// El operador `...` (spread operator) se usa para pasar cada elemento del array `precios` como un argumento separado a `Math.min`.
let precioMasBajo = Math.min(...precios);

// 3. Utilizamos `find` para buscar en el array `productos` el primer producto cuyo precio coincida con `precioMasBajo`.
// Esto nos devuelve el objeto completo del producto con el precio más bajo.
let productoMasBarato = productos.find(producto => producto.precio === precioMasBajo);

// 4. Imprimimos el nombre y el precio del producto más barato encontrado.
console.log(`El producto más barato es ${productoMasBarato.nombre} y cuesta $${productoMasBarato.precio}`);
```

### Explicación de las funciones:

1. **`map`:**
   - **Función:** `map` es un método de los arrays en JavaScript que crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
   - **En el código:** `productos.map(producto => producto.precio)` crea un nuevo array que contiene solo los precios de los productos. Así, si `productos` es `[ { nombre: "Camisa", precio: 20 }, { nombre: "Pantalón", precio: 30 }, { nombre: "Zapatos", precio: 50 } ]`, el array `precios` será `[20, 30, 50]`.

2. **`Math.min`:**
   - **Función:** `Math.min` es un método de JavaScript que devuelve el número más pequeño de una lista de números.
   - **En el código:** `Math.min(...precios)` encuentra el valor más pequeño en el array `precios`. El spread operator `...` expande el array `precios` en una lista de argumentos individuales para que `Math.min` pueda compararlos. Si `precios` es `[20, 30, 50]`, entonces `Math.min(...precios)` es equivalente a `Math.min(20, 30, 50)`, lo que devolvería `20`.

3. **`find`:**
   - **Función:** `find` es un método de los arrays en JavaScript que devuelve el primer elemento del array que cumple con una condición especificada en una función de callback.
   - **En el código:** `productos.find(producto => producto.precio === precioMasBajo)` busca en el array `productos` y devuelve el primer objeto cuyo `precio` sea igual a `precioMasBajo`. Si `precioMasBajo` es `20`, `find` devuelve `{ nombre: "Camisa", precio: 20 }`.

### Resumen:

Este código utiliza un enfoque más funcional, utilizando métodos de arrays para lograr el mismo objetivo que el bucle `for` en la primera solución. Aunque este enfoque es más "moderno" y puede ser más expresivo, en este caso específico, podría considerarse un poco más complicado de entender que el bucle `for`, especialmente para alguien que es nuevo en JavaScript.







## RESOLVER


///PUNTO 1///
function sumarArreglo(numeros, callback) {

    let resultado = 0;

    numeros.forEach(n => {
        resultado += n;
    });

    callback(resultado);

}

let numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
    console.log(resultado);
});

///PUNTO 2///
function filtrarArreglo(arreglo, callbackFiltro) {
    return arreglo.filter(n=>callbackFiltro(n));
}
  
numeros = [1, 2, 3, 4, 5];
const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
});

console.log(numerosPares);

//PUNTO 3///
function filtrarPares(numsArray,callback){
    const evenNums = numsArray.filter(n=>n%2===0);
    callback(evenNums);
}

function mostrarPares(numerosPares) {
    console.log(numerosPares);
}

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

filtrarPares(numeros, mostrarPares);

///PUNTO 4///

console.log("Estoy en Bogota");

const flightBOG_MAD = (callback) => {
    printMessage("Volando Bogota-Madrid");
    suspenseDots(7000);
    setTimeout(() => {
        printMessage("Vuelo Bogota - Madrid, me demoré 7 horas")
        printMessage("Llegué a Madrid");
        printMessage("///////////////");
        callback();
    }, 7000);
};

const flightMAD_FRA = (callback) => {
    printMessage('Volando Madrid-Frankfurt');
    suspenseDots(2000);
    setTimeout(() => {
        printMessage("Vuelo Madrid - Frankfurt, me demoré 2 horas")
        printMessage("Llegué a Frankfurt");
        printMessage("///////////////");
        callback();
    }, 2000);
};

const flightFRA_ICN = () => {
    printMessage('Volando Frankfurt-Seul');
    suspenseDots(10000);
    setTimeout(() => {
        printMessage("Vuelo Frankfurt - Seul, me demoré 10 horas")
        printMessage("Llegué a Seul");
        printMessage("///////////////");
    }, 10000);
};

function travelBogSeul(){
    flightBOG_MAD(()=>flightMAD_FRA(()=>flightFRA_ICN()));
}

function printMessage(message){
    console.log(message);
}

function suspenseDots(duration){
    let interval = 300;
    let dots = '';
    let perc = 0;
    const maxDots = 3;

    const intervalId = setInterval(() => {
        dots = dots + '.';
        perc += interval; 
        process.stdout.write('\r' + `${((perc/duration)*100).toFixed()}%` + dots);        
    }, interval);

    setTimeout(() => {
        clearInterval(intervalId);
        process.stdout.write('\r');
    }, duration);
};

travelBogSeul();

