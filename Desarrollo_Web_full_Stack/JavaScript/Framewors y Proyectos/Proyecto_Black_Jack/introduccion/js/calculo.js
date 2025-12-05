// Escuchar el evento de clic del botón
document.getElementById('calcularBtn').addEventListener('click', function () {

    // Obtener los valores de altura y peso ingresados
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    // variable del IMC
    let imc = peso / (altura * altura);
    

    //variable fecha
    let fecha = new Date() .toLocaleDateString();

    // Crear una nueva fila en la tabla para mostrar los resultados
    let resultadoTabla = document.getElementById('resultadoTabla');
    let newFila = resultadoTabla.insertRow();

    // Crear las celdas con la clase y los datos
    let celdaAltura = newFila.insertCell(0);
    celdaAltura.className = "text-center bg-light";
    celdaAltura.textContent = altura.toFixed(2);

    let celdaPeso = newFila.insertCell(1);
    celdaPeso.className = "text-center bg-light";
    celdaPeso.textContent = peso.toFixed(2);

    let celdaIMC = newFila.insertCell(2);
    celdaIMC.className = "text-center bg-light";
    celdaIMC.textContent = imc.toFixed(2);

    let celdaFecha = newFila.insertCell(3);
    celdaFecha.className = "text-center bg-light";
    celdaFecha.textContent = fecha;


    // Limpiar los campos del formulario
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
});
