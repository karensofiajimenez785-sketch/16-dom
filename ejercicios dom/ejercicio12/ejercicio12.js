const inputFoto = document.getElementById('inputFoto');
const preview   = document.getElementById('preview');

inputFoto.addEventListener('change', function(e) {
  const archivo = e.target.files[0];

  if (!archivo) return;

  const lector = new FileReader();

  lector.addEventListener('load', function() {
    preview.src          = lector.result; // base64 de la imagen
    preview.style.display = 'block';
  });

  lector.readAsDataURL(archivo); // convierte el archivo a base64
});
