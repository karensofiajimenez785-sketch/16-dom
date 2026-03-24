const campos          = document.getElementById('campos');
const btnAgregarCampo = document.getElementById('btnAgregarCampo');
const formDinamico    = document.getElementById('formDinamico');
let contador          = 1;

btnAgregarCampo.addEventListener('click', function() {
  const label = document.createElement('label');
  label.textContent = `Teléfono ${contador}: `;

  const input  = document.createElement('input');
  input.type   = 'tel';
  input.name   = `telefono_${contador}`;
  input.placeholder = 'Ej: 310 000 0000';

  campos.appendChild(label);
  campos.appendChild(input);
  campos.appendChild(document.createElement('br'));

  contador++;
});

formDinamico.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = formDinamico.querySelectorAll('input[type=tel]');
  inputs.forEach(function(inp) {
    console.log(inp.name, inp.value);
  });
});