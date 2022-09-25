// Metodos mas utilizados con cadenas de caracteres
// Como obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length)

// Obtener partes de cadenas de caracteres
// slice() substring() substr()

let slice_str = str.slice(0, 10) // Donde queremos que empiece a cortar y donde queremos que termine. Empieza en la letra 0 y termina en la 10.
console.log(slice_str)

let substring_str = str.substring(0, 10)
console.log(substring_str)

let substr_str = str.substr(5, 10) // Este practicamente no se usa y se perdera.
console.log(substr_str)

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Alexander"
console.log(cadena)
console.log(cadena.replace('Alexander', 'Miguel')) //Con .replace reemplazamos un valor por otro, en este caso cambiado el valor dentro de cadena, que es Alexander por Miguel


let texto_largo = `Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por le bosque, oler las flores
y recoger las nueces que se caen de los arboles`

// al utilizar strings solo reemplazxa la primera isntancia
console.log(texto_largo.replace('los', 'cinco'))

// al utilizar la expresion regular /g (global), reemplaza todas las instancias, en este caso reemplaza todos los 'los' por cinco
console.log(texto_largo.replace(/los/g, 'cinco'))


