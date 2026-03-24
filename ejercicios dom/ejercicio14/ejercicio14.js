const input = document.getElementById('usuario');
const error = document.getElementById('error');

// 'blur' se dispara cuando el campo pierde el foco
input.addEventListener('blur', function() {
  if (input.value.trim() === '') {
    error.style.display = 'inline';
    input.style.borderColor = 'red';
  } else {
    error.style.display = 'none';
    input.style.borderColor = 'green';
  }
});
