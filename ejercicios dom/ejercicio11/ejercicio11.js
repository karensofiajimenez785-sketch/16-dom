const fotos = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/20/300/200',
  'https://picsum.photos/id/30/300/200',
  'https://picsum.photos/id/40/300/200',
];

let indice = 0;
const foto = document.getElementById('fotoGaleria');
foto.src   = fotos[indice]; // imagen inicial

document.getElementById('btnSiguiente').addEventListener('click', function() {
  indice = (indice + 1) % fotos.length; // vuelve al inicio al terminar
  foto.src = fotos[indice];
});

document.getElementById('btnAnterior').addEventListener('click', function() {
  indice = (indice - 1 + fotos.length) % fotos.length;
  foto.src = fotos[indice];
});
