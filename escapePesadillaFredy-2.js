function findAllrecorridos(dream) {
    let caminos = [];
    let recorrido = [];

    function recorrer(i, j, recorrido) {
        console.log(`posición ${i},${j}: ${dream[i][j]}`);
        recorrido.push(dream[i][j]); // Agregar la celda actual al camino
        
        // Si hemos llegado a la esquina inferior derecha, guardar el camino
        if (i === dream.length - 1 && j === dream[0].length - 1) {
            caminos.push([...recorrido]);
            console.log("Salí de un recorrido: ", [...recorrido], ...recorrido, recorrido );
        } else {
            // Moverse hacia la derecha si es posible
            if (j < dream[0].length - 1) {
                console.log(`posición ${i},${j}`)
                recorrer(i, j + 1, recorrido);
            }
            // Moverse hacia abajo si es posible
            if (i < dream.length - 1) {
                console.log(`posición ${i},${j}`)
                recorrer(i + 1, j, recorrido);
            }
        }
        
        // Retroceder para explorar otros caminos
        console.log(`posición antes del pop ${i},${j}`)
        recorrido.pop();
        console.log(recorrido)
    }

    // Iniciar la recursión desde la esquina superior izquierda
    recorrer(0, 0, recorrido);

    // ---- 
    // Ahora entrega un array donde sume los valores de cada camino

    console.log(caminos);
    let sumaCaminos = caminos.map((camino) => camino.reduce((acc, val) => acc + val, 0));
    console.log(sumaCaminos);

    // ordenar los caminos de menor a mayor
    sumaCaminos.sort((a, b) => a - b);
    console.log(sumaCaminos);
    return sumaCaminos[0];
}

// Ejemplo de uso
const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
];

console.log(findAllrecorridos(dream));