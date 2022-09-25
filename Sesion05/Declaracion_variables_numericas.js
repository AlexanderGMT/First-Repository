// Numberos

// Declaracion de variables numericas, enteros y con decimales.
let a = 5
console.log(a) // 5

let b = 0.1
console.log(b) // 0.1

// Precision
let c = 0.2

console.log(b + c) // 0.3000000000004 es erroneo, da eso en vez de 0.3. Vamos a ver a continuacion como obtener esa precision, el 0.3

// Con esto podemos solucionar el problema de las ecuaciones con numeros decimales.
// existen mas truquitos y librerias para solventar este problema.
// small tip.
console.log(Math.round((0.1 + 0.2) * 100) /100 ) // 0.3



