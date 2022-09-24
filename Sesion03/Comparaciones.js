// Comparaciones 

// Igualdad

// igualdad debil ==

if (5 == 5) {
    console.log("5 es igual a 5");
}

// igualdad fuerte ===

if (5 === 5) {
    console.log("5 es igual a 5")

}

// == solo compara el valor

// === compara el valor y el tipo

let a = 5;

let b = "5";

if (a == b) {
    console.log("a es igual a b - debil")

}

if (a === b) {
    console.log("a es igual a b - fierte")
}

// Comparacion de desigualdad  != (usamos esa convinacion de simbolos para ver verificar que las variables son diferentes en valor)

let c = 4;

let d = "4";

if (c != d) {
    console.log("c es diferente a d - debil")
}

if (c !== d) {
    console.log("c es diferente a d - fuerte")
} // porque son diferentes en valor.


// Mayores y menores

let max = 10;

let min = 5;


if (max > min) {
    console.log("max es mayor que min");
    
} // entra porque efectivamente max es mayor que min.

if (min < max) {
    console.log("min es menor que max");
    
} // entra porque efectivamente min es menor que max.

if (max >= 10) {
    console.log("min es menor que max");
    
} // entra porque efectivamente max es mayor o igual a 10, en este caso es igual a 10.

if (min <= 5) {
    console.log("min es menor que max");
    
} // entra porque efectivamente min es menor o igual a 5, en este caso es igual a 5/







