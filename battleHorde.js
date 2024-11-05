/* 
En una lucha épica entre muertos vivientes 🧟 y humanos 👮‍♂️, ambos bandos tienen una lista de combatientes con poderes de ataque específicos.

La batalla se desarrolla en rondas, y cada ronda enfrenta a cada combatiente de su bando.

El bando con mayor poder de ataque gana la ronda, y su poder se suma al siguiente combatiente de su equipo.

En caso de empate, ambos combatientes caen y no afectan a la próxima ronda.

Dadas dos cadenas de texto zombies y humans, donde cada dígito (del 1 al 9) representa el poder de ataque de un combatiente, determina quién queda al final y con cuánto poder de ataque.

Importante: Las dos cadenas siempre tendrán la misma longitud.

La salida es una cadena de texto que representa el resultado final de la batalla.

Si queda un zombie, devuelve su poder seguido de "z", por ejemplo "3z".
Si queda un humano, devuelve su poder seguido de "h", por ejemplo "2h".
Si hay un empate y ninguno queda con poder al final, devuelve "x".
*/

function battleHorde(zombies, humans) {
	let combatientesZombies = zombies.split("").map((element) => Number(element));
	let combatientesHumanos = humans.split("").map((element) => Number(element));

	let acumuladoZombie = 0;
	let acumuladoHumano = 0;

    console.log(`new combat, humans ${humans}, zombies ${zombies}`);

	for (let ronda = 0; ronda < combatientesHumanos.length; ronda++) {
        // console.log("combatientesHumanos: ", combatientesHumanos[ronda])
        // console.log("combatientesZombies: ", combatientesZombies[ronda])
        console.log(`combatientesHumanos: ${combatientesHumanos[ronda]} más acumulado de ${acumuladoHumano} da ${combatientesHumanos[ronda] + acumuladoHumano}`)
        console.log(`combatientesZombies: ${combatientesZombies[ronda]} más acumulado de ${acumuladoZombie} da ${combatientesZombies[ronda] + acumuladoZombie}`)
		if ((combatientesHumanos[ronda] + acumuladoHumano) == (combatientesZombies[ronda] + acumuladoZombie)) {
            console.log(`Entre a cuando son iguales`)
			acumuladoZombie = 0;
			acumuladoHumano = 0;
		} else if ((combatientesHumanos[ronda] + acumuladoHumano) > (combatientesZombies[ronda] + acumuladoZombie)) {
            console.log(`Entre a cuando humano es mayor`)
            acumuladoHumano = (combatientesHumanos[ronda] + acumuladoHumano) - (combatientesZombies[ronda] + acumuladoZombie);
            acumuladoZombie = 0;
		} else if ((combatientesHumanos[ronda] + acumuladoHumano) < (combatientesZombies[ronda] + acumuladoZombie)) {
            console.log(`Entre a cuando zombie es mayor`)
            acumuladoZombie = (combatientesZombies[ronda] + acumuladoZombie) - (combatientesHumanos[ronda] + acumuladoHumano);
            acumuladoHumano = 0;
        }
        console.log("acumuladoHumano: ", acumuladoHumano)
        console.log("acumuladoZombie: ", acumuladoZombie)
	}

    if (acumuladoHumano == acumuladoZombie) {
        console.log("x");
        return "x"
    } else if (acumuladoHumano > acumuladoZombie) {
        console.log(`${acumuladoHumano}h`);
        return `${acumuladoHumano}h`
    } else if (acumuladoHumano < acumuladoZombie) {
        console.log(`${acumuladoZombie}z`);
        return `${acumuladoZombie}z`
    }
}

// Aquí tienes un ejemplo:

let zombies = "242";
let humans = "334";

battleHorde(zombies, humans); // Resultado esperado -> "2h"

// primera ronda: zombie 2 vs human 3 -> humano gana (+1)
// segunda ronda: zombie 4 vs human 3+1 -> empate
// tercera ronda: zombie 2 vs human 4 -> humano gana (+2)
// resultado: "2h"

zombies = "444";
humans = "282";

battleHorde(zombies, humans); // -> "x"

// primera ronda: zombie 4 vs human 2 -> zombie gana (+2)
// segunda ronda: zombie 4+2 vs human 8 -> humano gana (+2)
// tercera ronda: zombie 4 vs human 2+2 -> empate
// resultado: "x"
