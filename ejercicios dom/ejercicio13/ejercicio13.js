const form   = document.getElementById('miFormulario');
const salida = document.getElementById('salida');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // detiene la recarga de la página

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;

  salida.textContent = `Enviado: ${nombre} — ${correo}`;
});
