const panel = document.getElementById('panel');
const btnToggle = document.getElementById('btnToggle');

btnToggle.addEventListener('click', function() {
    panel.classList.toggle('oscuro');
    //si tiene  la clase la elimina; si no la tiene, la agrega
});