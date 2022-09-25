// Metodos de cadenas de texto parte 3

// https://regexr.com  // pagina util para aprender como funcionan las expresiones regulares.

let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles."

console.log(texto_largo.match(/no/g)) // esto nos indica cuantas veces aparece dicha palabra en el texto, en este caso son 4 "no"


// A continuacion vamos a ver si el texto contiene una palabra.

console.log(texto_largo.includes("terremoto")) // false, porque el texto no contiene dicha palabra.


// Saber si un texto empieza con una palabra.

console.log(texto_largo.startsWith("Arboles")) // false
console.log(texto_largo.startsWith("Tito")) // true


// Saber si un texto termina con otra palabra.

console.log(texto_largo.endsWith("arboles.")) // true




