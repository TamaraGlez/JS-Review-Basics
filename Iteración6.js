const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array, posicion1, posicion2) {
    // me los guardo por si los pierdo
    const primero = array[posicion1]
    const segundo = array[posicion2]

    array.splice(posicion1, 1, segundo)
    // ahora corta desde pa posicion 2 y añade el primer
    array.splice(posicion2, 1, primero);
    
}
// cambia posición 0 por 3
// console.log(swap(array, 0, 3))

const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array, posicion1, posicion2) {
    cons primero = array[posicion1];

    array[posicion1] = array[posicion2];
    array[posicion2] = primero;
}
