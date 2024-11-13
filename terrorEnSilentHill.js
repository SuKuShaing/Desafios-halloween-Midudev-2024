/*
Estás atrapado en Silent Hill, en una habitación cuadrada de tamaño n x n y el temido Pyramid Head (▲) 
está en algún lugar de la habitación, moviéndose hacia ti (T).

Tú no puedes moverte, y Pyramid Head se mueve una celda por turno, en cualquiera de las cuatro 
direcciones cardinales (arriba, abajo, izquierda, derecha), pero siempre elige el camino más corto 
hacia tu posición. Tu objetivo es determinar si Pyramid Head puede alcanzarte.

La habitación está representada por una matriz n x n:

T: tu posición (donde te encuentras atrapado).
▲: la posición inicial de Pyramid Head.
.: espacios vacíos donde Pyramid Head puede moverse.
#: paredes que Pyramid Head no puede atravesar.

Escribe una función que determine si Pyramid Head podrá alcanzarte. Si Pyramid Head puede alcanzarte, 
devuelve el número de pasos con lo que lo puede lograr, si no puede alcanzarte entonces devuelve -1.
*/

function escapePyramidHead(room) {
    // Encuentra la posición de Pyramid Head y la tuya
    let myPosition = findPosition(room, "T"); // [4, 0]
    let pyramidHead = findPosition(room, "▲"); // [0, 4] este valor hay que debo restarlo a myPosition para saber la distancia y hacia dónde se mueve, al final no seguí esta idea
    console.log({pyramidHead, myPosition});

    // crea un mapa de llenado, en el cual se va a ir llenando con los pasos que va dando Pyramid Head en las distintas direcciones
    // let mapaDeLlenado = [...room]; // ... hace una copia superficial de la matriz, las submatrices internas (filas) son las mismas referencias
    let mapaDeLlenado = room.map((fila) => [...fila]); // crea una copia profunda de la matriz
    console.log(mapaDeLlenado);
    
    // coloca un 0 en la posición de Pyramid Head
    mapaDeLlenado[pyramidHead[0]][pyramidHead[1]] = 0;
    console.log(mapaDeLlenado);
    
    // mapa de llenado anterior
    let mapaDeLlenadoAnterior = [...mapaDeLlenado];

    // verifica sí la posición de myPosition en el mapa de llenado es un número
    // sí es un número, entonces Pyramid Head llegó a mi posición, y retorna el número que hay en esa casilla
    while (typeof mapaDeLlenado[myPosition[0]][myPosition[1]] !== "number") {

        /* haremos un recorrido en la matriz y sumaremos +1 sí en alguna posición (arriba, abajo, izquierda, derecha) a la actual mía hay un número*/
        /* en los 4 espacios adyacentes a Pyramid Head, verifica si existe esa casilla */
        /* verifica sí es un muro (#) */
        /* verifica sí es un número */
        for (let i = 0; i < mapaDeLlenado.length; i++) {
            for (let j = 0; j < mapaDeLlenado[i].length; j++) {
                // -- Evalúa la casilla de actual
                // Es un muro o un número
                if (mapaDeLlenado[i][j] === "#" || typeof mapaDeLlenado[i][j] === "number") {
                    continue;
                }
                // Es un . o un T
                if (mapaDeLlenado[i][j] === "." || mapaDeLlenado[i][j] === "T") {
                    // Busca sí alguna de las casillas adyacentes es un número
                    // Arriba
                    if (i - 1 >= 0 && typeof mapaDeLlenado[i - 1][j] === "number") {
                        mapaDeLlenado[i][j] = mapaDeLlenado[i - 1][j] + 1;
                    }
                    // Abajo
                    if (i + 1 < mapaDeLlenado.length && typeof mapaDeLlenado[i + 1][j] === "number") {
                        mapaDeLlenado[i][j] = mapaDeLlenado[i + 1][j] + 1;
                    }
                    // Izquierda
                    if (j - 1 >= 0 && typeof mapaDeLlenado[i][j - 1] === "number") {
                        mapaDeLlenado[i][j] = mapaDeLlenado[i][j - 1] + 1;
                    }
                    // Derecha
                    if (j + 1 < mapaDeLlenado[i].length && typeof mapaDeLlenado[i][j + 1] === "number") {
                        mapaDeLlenado[i][j] = mapaDeLlenado[i][j + 1] + 1;
                    }
                }
            }
        }
        // console.log("mapaDeLlenadoAnterior");
        // console.log(mapaDeLlenadoAnterior);
        // console.log("mapaDeLlenado");
        console.log(mapaDeLlenado);

        // verificamos sí son iguales
        if (JSON.stringify(mapaDeLlenado) === mapaDeLlenadoAnterior) {
            // salimos del bucle while
            break;
        } else {
            // Guardamos el mapa de llenado actual y lo comparamos con la iteración anterior
            mapaDeLlenadoAnterior = JSON.stringify(mapaDeLlenado);
        }            
        
    }

    // retorna los resultados
    if (typeof mapaDeLlenado[myPosition[0]][myPosition[1]] === "number") {
        console.log(`result: ${mapaDeLlenado[myPosition[0]][myPosition[1]]}`);
        return mapaDeLlenado[myPosition[0]][myPosition[1]];
    } else {
        console.log(`result: -1`);
        return -1;
    }


    // funciones auxiliares
    function findPosition(matriz, objetivo) {
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] === objetivo) {
                    return [i, j];
                }
            }
        }
    }
}

// Ejemplos

// const room = [
// 	[".", ".", "#", ".", "▲"],
// 	["#", ".", "#", ".", "#"],
// 	[".", ".", ".", ".", "."],
// 	["#", "#", "#", ".", "#"],
// 	["T", ".", ".", ".", "."],
// ];

// escapePyramidHead(room); // -> 8

// const room2 = [
// 	["T", ".", "#", "."],
// 	[".", ".", ".", "."],
// 	["▲", ".", ".", "#"],
// 	[".", "#", "#", "#"],
// ];

// escapePyramidHead(room2); // -> 2

// const room3 = [
// 	["#", "#", "#"],
// 	["▲", ".", "#"],
// 	[".", "#", "T"],
// ];

// escapePyramidHead(room3); // -> -1

// const room4 = [
// 	[".", ".", "#", ".", ".", "#"],
// 	["#", ".", "#", ".", "#", "."],
//     [".", ".", ".", "#", "▲", "."],
//     [".", "#", ".", ".", "#", "."],
//     [".", "#", ".", ".", ".", "."],
//     ["T", "#", "#", ".", "#", "."],
// ];

// escapePyramidHead(room4); // -> 13

// const room5 = [
// 	[".", ".", "#", ".", ".", "#", ".",],
//     ["#", ".", "#", ".", "#", ".", "#",],
//     [".", ".", ".", "#", "▲", ".", ".",],
//     [".", "#", ".", ".", "#", ".", ".",],
//     [".", "#", ".", ".", ".", ".", ".",],
//     [".", "#", "#", "#", "#", ".", ".",],
//     [".", ".", ".", ".", "T", "#", ".",],
// ];

// escapePyramidHead(room5); // -> 18