// Operador .valueOf() - Obtener valores numericos a partir de literales

let a = 2
let b = new Number(3)
console.log(a) // 2
console.log(b) // Number 3 {} Aun que se vea asi, sigue actuando como un numero normal.
console.log(a + b) // 5

console.log(b.valueOf())

let str = new String("Hola soy un string")
console.log(str)
console.log(str.valueOf()) // Hola soy un string

// NaN(Not a Number) - Infinity

let n = Number('adios')
console.log(n) // NaN
console.log(isNaN(n)) // true

let numerador = 19
let divisor = 2
let divisor0 = 0
let divisor2 = null
console.log(numerador / divisor) // 9.5
console.log(numerador / divisor0) // infinity
console.log(numerador / divisor2) // infinity


// Como convertir los stringa valores numericos con Number, parseInt y parseFloat

let numero = '5.89'
let num2 = 17.2
console.log(typeof numero) // string
console.log(numero + num2) // 5.8917.2 Error de concepto

// Number
console.log(Number(numero) + num2) // 23.09 Esto ya transforma esos string a numero, basicamente como el int de python.

// parseInt
console.log(parseInt(numero)) // 5 el parseInt me lo transforma a un numero y ademas a un numero entero, por eso no hay decimales.

// parseFloat
console.log(parseFloat(numero)) // 5.89 el parseFloat me lo transforma a un numero y ademas a un numero con decimales.




// Numeros hexadecimales (base 16)

let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16)) //239031

// Obtener los valores maximo y minimo en JavaScript

let min_precision = Number.EPSILON
let min_valor_JS = Number.MIN_VALUE
let max_value_JS = Number.MAX_VALUE

console.log(min_precision)
console.log(min_valor_JS) 
console.log(max_value_JS)

console.log(2 ** 1024) // Infinity porque ya no puede tomar numeros mas grandes.


