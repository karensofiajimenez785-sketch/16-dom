const btn = document.getElementById('btnSubmit');

btn.addEventListener('click', function() {
  btn.textContent          = 'Enviado correctamente';
  btn.classList.add('enviado');
  btn.style.backgroundColor = 'green';
  btn.style.color           = 'white';
  btn.disabled              = true;
});
