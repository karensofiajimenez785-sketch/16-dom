const cuerpo = document.getElementById('cuerpo');

// Al agregar cada fila, añadir botón de eliminar
function agregarFila(nombre, pais) {
    const fila = cuerpo.insertRow();

    fila.insertCell().textContent = nombre;
    fila.insertCell().textContent = pais;

    const celdaBtn = fila.insertCell();
    const btnElim = document.createElement('button');
    btnElim.textContent = 'Eliminar';

    btnElim.addEventListener('click', function () {
        fila.remove();   // elimina el elemento del DOM
    });

    celdaBtn.appendChild(btnElim);
}

agregarFila('Luis Pérez', 'Colombia');
agregarFila('Sara Gómez', 'México');
agregarFila('Pedro Ruiz', 'Argentina');
