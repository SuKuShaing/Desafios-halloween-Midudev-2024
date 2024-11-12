/*
Estás atrapado en una pesadilla en la que Freddy Krueger te persigue 😭. El sueño está representado por un laberinto de celdas, donde cada celda tiene un valor numérico que indica el nivel de peligro de esa parte del sueño.

Debes encontrar el camino más seguro (es decir, el que tenga el menor valor total de peligro) desde la esquina superior izquierda hasta la esquina inferior derecha de la matriz.

En este desafío, solo puedes moverte hacia la derecha o hacia abajo (no puedes retroceder ni moverte en diagonal) y debes calcular el nivel total de peligro del camino más seguro.

La pesadilla está representada por una matriz dream de tamaño n x m donde cada celda es un número positivo que representa el nivel de peligro de esa celda en el sueño.

Y tienes que devolver el valor total de peligro del camino más seguro de la esquina superior izquierda (posición [0][0]) a la esquina inferior derecha (posición [n-1][m-1]).
*/

function findAllrecorridos(dream) {
    let caminos = [];
    let recorrido = [];

    function recorrer(i, j, recorrido) {
        console.log(`posición ${i},${j}: ${dream[i][j]}`);
        recorrido.push(dream[i][j]); // Agregar la celda actual al camino
        debugger;
        
        // Si hemos llegado a la esquina inferior derecha, guardar el camino
        if (i === dream.length - 1 && j === dream[0].length - 1) {
            caminos.push([...recorrido]);
            console.log("Salí de un recorrido: ", [...recorrido], ...recorrido, recorrido );
        } else {
            // Moverse hacia la derecha si es posible
            if (j < dream[0].length - 1) {
                debugger;
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

console.log(findAllrecorridos(dream));// Devuelve 7
// El mejor camino es:
// [0, 0] -> 1
// [0, 1] -> 3
// [0, 2] -> 1
// [1, 2] -> 1
// [2, 2] -> 1

// 1 -> 3 -> 1 -> 1 -> 1 = 7
