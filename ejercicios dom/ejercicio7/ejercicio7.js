const btnAgregar = document.getElementById('btnAgregar');
const cuerpo     = document.getElementById('cuerpo');

btnAgregar.addEventListener('click', function() {
  const nombre = document.getElementById('inNombre').value;
  const edad   = document.getElementById('inEdad').value;

  if (!nombre || !edad) return; // validación básica

  const fila = cuerpo.insertRow();          // insertRow() al final
  fila.insertCell().textContent = nombre;
  fila.insertCell().textContent = edad;

  // Limpiar inputs
  document.getElementById('inNombre').value = '';
  document.getElementById('inEdad').value   = '';
});
