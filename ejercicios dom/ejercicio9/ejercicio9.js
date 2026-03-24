const btn     = document.getElementById('btnEliminarTabla');
const wrapper = document.getElementById('wrapper');
const tabla   = document.getElementById('tablaEliminar');

btn.addEventListener('click', function() {
  // Opción A — moderna y directa:
  tabla.remove();

  // Opción B — clásica (útil si necesitas el nodo eliminado):
  // wrapper.removeChild(tabla);
});
