/*
Estás atrapado en una pesadilla en la que Freddy Krueger te persigue 😭. El sueño está representado por un laberinto de celdas, donde cada celda tiene un valor numérico que indica el nivel de peligro de esa parte del sueño.

Debes encontrar el camino más seguro (es decir, el que tenga el menor valor total de peligro) desde la esquina superior izquierda hasta la esquina inferior derecha de la matriz.

En este desafío, solo puedes moverte hacia la derecha o hacia abajo (no puedes retroceder ni moverte en diagonal) y debes calcular el nivel total de peligro del camino más seguro.

La pesadilla está representada por una matriz dream de tamaño n x m donde cada celda es un número positivo que representa el nivel de peligro de esa celda en el sueño.

Y tienes que devolver el valor total de peligro del camino más seguro de la esquina superior izquierda (posición [0][0]) a la esquina inferior derecha (posición [n-1][m-1]).
*/

function findSafestPath(dream) {
	let caminos = [];

	let pasePorElInferiorIzquierdo = false;

	while (!pasePorElInferiorIzquierdo) {
		let FinaliceRecorrido = false
		
		while (!FinaliceRecorrido) {
			let recorrido = [];

			let IndiceColumna = 0;
			let IndiceRow = 0;

			let LimiteDerecha = dream[0].length; // 3
			let limiteFondo = dream.length; // 3

			let topeMovilDerechaPorRow = new Array(dream[0].length).fill(dream[0].length); // [3, 3, AnchoDeLaMatriz]
			let topeMovilFondoPorColumna = dream.map((subArray) => subArray.length); // [3, 3, AltoDeLaMatriz] 

			while (IndiceColumna < topeMovilDerechaPorRow[IndiceRow]) {
				recorrido.push(dream[IndiceRow][IndiceColumna])
				IndiceColumna++

				if (IndiceColumna == topeMovilDerechaPorRow[IndiceRow]) { // llegó al tope derecho
					IndiceRow++
					IndiceColumna--

					if (IndiceRow == limiteFondo && IndiceColumna == LimiteDerecha - 1) { // llegó a la casilla final
						FinaliceRecorrido = true
						IndiceColumna++

						if (IndiceRow == limiteFondo && IndiceColumna - 1 == 0) {
							pasePorElInferiorIzquierdo = true
						}

						topeMovilDerechaPorRow[IndiceRow]--
					}
				}
			}

			caminos.push(recorrido);
		}
	}

	console.log(caminos);
}

const dream = [
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1],
];

findSafestPath(dream); // Devuelve 7
// El mejor camino es:
// [0, 0] -> 1
// [0, 1] -> 3
// [0, 2] -> 1
// [1, 2] -> 1
// [2, 2] -> 1

// 1 -> 3 -> 1 -> 1 -> 1 = 7
