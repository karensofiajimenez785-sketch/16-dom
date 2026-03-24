const contenedor = document.getElementById('contenedor');

// 1. Crear la tabla
const tabla = document.createElement('table');
tabla.border = '1';

// 2. Crear encabezado
const encabezado = tabla.createTHead();
const filaTitulo  = encabezado.insertRow();
filaTitulo.insertCell().textContent = 'Nombre';
filaTitulo.insertCell().textContent = 'Edad';
filaTitulo.insertCell().textContent = 'Ciudad';

// 3. Crear cuerpo con datos
const cuerpo = tabla.createTBody();

const datos = [
  ['Carlos López',  28, 'Bogotá'],
  ['María Torres',  34, 'Medellín'],
];

datos.forEach(function(fila) {
  const tr = cuerpo.insertRow();
  fila.forEach(function(dato) {
    tr.insertCell().textContent = dato;
  });
});

// 4. Insertar tabla en el DOM
contenedor.appendChild(tabla);

