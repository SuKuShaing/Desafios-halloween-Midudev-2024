/*
Durante la noche de Halloween 🎃, una bruja 🧙‍♀️ está preparando una mezcla mágica. Tiene una lista de pociones, cada una con un poder asociado, y quiere combinar dos de ellas para obtener un poder total específico.

Dada una lista de enteros donde cada número representa el poder de una poción 🧪 y un número entero que representa el poder objetivo, debes encontrar el índice de las dos primeras pociones que sumen exactamente el poder objetivo.
*/

function createMagicPotion(potions, target) {
	let arraysEncontrados = [];

    for (let i = 0; i < potions.length; i++) {
        for (let j = i + 1; j < potions.length; j++) {
            if (potions[i] + potions[j] == target) {
                arraysEncontrados.push([i, j]);
            }
        }
    }

    if (arraysEncontrados.length > 1) {
        // console.log(arraysEncontrados)
        arraysEncontrados.sort((a, b) => a[1] - b[1])
        // console.log(arraysEncontrados)
        return arraysEncontrados[0]
    }
    if (arraysEncontrados.length == 1) {
        return arraysEncontrados[0]
    }
    if (arraysEncontrados.length == 0) {
        return undefined;
    }
}

// Debe pasar los siguientes test

let potions = [4, 5, 6, 2];
let goal = 8;

console.log(createMagicPotion(potions, goal)); // Resultado esperado: [2, 3]


//Si no se encuentra ninguna combinación, devuelve undefined
potions = [1, 2, 3, 4];
goal = 9;

console.log(createMagicPotion(potions, goal)); // undefined


// En el caso que haya más de una combinación posible, selecciona la combinación cuya segunda poción aparezca primero en la lista.
potions = [1, 2, 3, 4];
goal = 5;

console.log(createMagicPotion(potions, goal)); // [1, 2]
// también podría ser [0, 3] pero hay una combinación antes
