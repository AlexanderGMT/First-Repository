let nombre = "Alexander"

let apellido = "Gomez"

let estudiante = nombre.concat(" " + apellido)
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus)

let num_letras = estudiante.length;
console.log(num_letras)

let primera_nombre = nombre.charAt(0)
console.log(primera_nombre)

let ultima_apellido = apellido.charAt(4)
console.log(ultima_apellido)

let espacios = estudiante.trim().length
console.log(espacios)

let contiene = estudiante.includes(nombre)
console.log(contiene)
