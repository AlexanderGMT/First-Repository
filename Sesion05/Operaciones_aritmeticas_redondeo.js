// Principales operaciones aritmeticas

let a = 3.5
let b = 4.8

// Suma (+)
console.log(a + b) // 8.3

// Resta (-)
console.log(a - b) // -1.29999999998, si queremos podemos tirar de la ecuacion de precision para redondear.

// Multiplicacion (*)
console.log(a * b) // 16.8

// Division (/)
console.log(a / b) // 0.7291666666667, si queremos podemos tirar de la ecuacion de precision para redondear. 



// Representacion de los numeros en cadenas de texto

console.log(typeof a) // number
let a_s = a.toString()

console.log(a_s) // 3.5
console.log(typeof a_s) //string

// Redondeo de numeros decimales

let c = 3.3
let d = c * 3
console.log(d) //9.89999999999
// .toFixed(x) - Limitar el numero de decimales al valor x.
console.log(d.toFixed(1)) // 9.9 si ponemos 0 se redondea sin decimales, si ponemos 1 nos da un decimal, si ponemos 2, dos decimales.
console.log(typeof d.toFixed(4)) // String, El tofixed lo que ha hecho es que nos ha transformado a un string.

let e = 1839.123456789
let f = 22134534653623

console.log(e.toFixed(2)) // 1939.12
console.log(f.toFixed(2)) // 22134534653623.00

// to.Precision(x) - Limita el numero de cifras significativas

console.log(e.toPrecision(7)) // 1839.123
console.log(f.toPrecision(7)) // 2.213453e+13

console.log(typeof f.toPrecision(3)) // string , aqui tambien nos devuelve un string en vez de un numero.






// Representacion de los numeros en cadenas de texto
// Redondeo de numeros decimales