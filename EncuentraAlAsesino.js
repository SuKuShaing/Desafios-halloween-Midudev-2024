/* 
Una persona ha sido asesinada en la noche de Halloween 🔪. Usando un hechizo 🧙‍♀️, hemos conseguido escuchar su último susurro 
pero es muy débil y no nos permite identificar quién pudo ser el asesino.

La información que nos proporciona:

whisper: cadena de texto que representa lo que la víctima intentó decir antes de morir

suspects: lista de cadenas que representa los nombres de todos los sospechosos.

Hay que tener que el susurro whisper tiene algunas reglas:

Cada ~ representa una letra incierta en el susurro.
Cada posición del susurro es una posición del nombre del asesino.
La longitud del whisper no siempre representa la longitud completa del nombre, ya que la víctima pudo haber muerto antes de terminar 
de decirlo.
Pero si el último carácter del susurro es una $, entonces el nombre del asesino terminaba ahí.
¡Tu objetivo es descubrir quién pudo ser el asesino! Debes devolver:

Si solo un nombre encaja con el patrón del susurro, retorna ese nombre.
Si hay varios nombres que encajan, retorna todos los nombres separados por comas.
Si ningún nombre encaja, retorna una cadena vacía ("").
Las mayúsculas y minúsculas de las letras no importan.
*/

function findTheKiller(whisper, suspects) {
	whisper = whisper.toLowerCase(); // nombre del asesino a minúsculas

	// Descartar a los sospechosos que no tengan la misma longitud que el whisper solo sí el whisper termina con $
	if (whisper[whisper.length - 1] === '$') {
		suspects = suspects.filter((suspect) => suspect.length === whisper.length - 1);
	}

	// compara las letras de cada sospechoso con las letras del whisper, si es ~ no importa, si no es ~, las letras deben ser iguales
	const killer = suspects.filter((suspect) => {
		for (let i = 0; i < whisper.length; i++) {
			minusSuspect = suspect.toLowerCase();
			console.log(minusSuspect);
			if (whisper[i] === '~' || whisper[i] === '$') {
				continue;
			} else if (whisper[i] !== minusSuspect[i]) {
				return false;
			}
		}
		return true;
	});

	// Resultado según la cantidad de sospechosos en la lista killer
	if (killer.length === 1) {
		//sí hay un solo sospechoso en la lista killer, retorna el nombre del asesino como un string
		return killer[0];
	} else if (killer.length > 1) {
		// sí hay varios sospechosos en la lista, retorna los nombres de los sospechosos separados por comas
		return killer.join(',');
	} else {
		// sí no hay sospechosos en la lista, retorna una cadena vacía
		return '';
	}
}



// findTheKiller('d~~~~~a', ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers']); // -> 'Dracula'


// findTheKiller('~r~dd~', ['Freddy', 'Freddier', 'Fredderic']); // -> 'Freddy,Freddier,Fredderic'


// findTheKiller('~r~dd$', ['Freddy', 'Freddier', 'Fredderic']); // -> ''


// findTheKiller('mi~~def', ['Midudev', 'Midu', 'Madeval']); // -> ''


// findTheKiller('~~~~~~$', ['Pennywise', 'Leatherface', 'Agatha']) // -> Agatha

// findTheKiller('~~~~~y$', ['Chucky', 'Tiffany', 'Freddy', 'Mickey']) // -> "Chucky,Freddy,Mickey"