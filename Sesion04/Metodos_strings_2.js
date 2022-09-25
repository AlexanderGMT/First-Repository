// Metodos de cadenas de texto (parte 2)

let input = "Escorpio"
let db = "escorpio"

console.log(input == db) // false

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase()) // escorpio
console.log(input.toUpperCase()) // Escorpio
console.log(input.toLowerCase() === db.toLowerCase()) //true


// Formas de concadenar dos cadenas de caracteres

let str_1 = "Hola soy la primera cadena. "
let str_2 = "Y yo soy la segunda cadena"

console.log(str_1.concat(str_2)) //Hola soy la primera cadena. Y yo soy la segunda cadena.
console.log(str_1 + " " + str_2) // Hola soy la primera cadena. Y yo soy la segunda cadena.
console.log(`${str_1} ${str_2}`) // Hola soy la primera cadena. Y yo soy la segunda cadena.

// Eliminar espacios al inicio y al final

let str_3 = "   Hola soy un string con espacios al final.   "
console.log(str_3.length) // 44
// metodo trim() Esto elimina los espacios al principio y al final.
console.log(str_3.trim().length) // 41
// Si queremos solamente eliminar los espacios al principio.
console.log(str_3.trimStart().length) // 44
// Si queremos solamente eliminar los espacios al final.
console.log(str_3.trimEnd().length) // 44

// Obtener el caracter que hay en cierta posiciones

let str_4 = "Hola soy el string numero 4"
console.log(str_4.charAt(0)) // H.  Esto lo que hace es sacarnos el caracter de la posicion que deseamos. En este caso la posicion 0 es la letra H de Hola.
console.log(str_4[5]) // Podemos tratarlo como una lista, de esta forma buscamos el caracter numero 5, que es la letra S de soy.

// Obtener la posicion de una palabra dentro de una cadena de caracteres

let str_5 = "Hola soy Gorka y me gusta el surf. Me llamo Gorka"
console.log(str_5.indexOf("Gorka")) // 9, nos da la posicion de la primera letra donde empieza dicha palabra. Si la palabra se repite varias veces, nos da la primera vez que sale la palabra
console.log(str_5.lastIndexOf("Gorka")) // 44, nos da la ultima.






