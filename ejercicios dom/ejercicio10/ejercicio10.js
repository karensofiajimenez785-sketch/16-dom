const galeria = document.getElementById('galeria');
const btn     = document.getElementById('btnImagen');

btn.addEventListener('click', function() {
  const img    = document.createElement('img');

  img.src    = 'https://picsum.photos/200/150'; // URL de la imagen
  img.alt    = 'Imagen de ejemplo';
  img.width  = 200;
  img.height = 150;
  img.style.margin = '8px';

  galeria.appendChild(img);
});
