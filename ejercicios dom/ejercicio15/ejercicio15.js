const encuesta  = document.getElementById('encuesta');
const resultado = document.getElementById('resultado');

encuesta.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre  = document.getElementById('nombreEnc').value;
  const edad    = document.getElementById('edad').value;
  const acepta  = document.getElementById('acepta').checked; // boolean

  if (!acepta) {
    resultado.textContent = 'Debes aceptar los términos.';
    return;
  }

  resultado.textContent = `${nombre}, rango: ${edad}. Términos aceptados.`;

  encuesta.reset(); // limpia todos los campos del formulario
});
