var variable;
let variableLET;

// const constante; (No se modifican)
const constante = "Hola soy una constante"

console.log(constante);// Hola soy una constante. (A las constantes no se las puede reescribir mas adelante en un codigo como hacemos con las variables, por eso son cosntantes.)

// var variable; (Se puede reescribir su valor, por eso son variables)

var a = 1;
console.log(a); // 1

a = 4;
console.log(a); // 4 

// let variable; (Var afecta a todo el codigo, y let afecta solamente al bloque donde esta declarada esa variable LET, por eso es mejor LET)

let b = 3;
console.log(b); // 3

b = 5;
console.log(b); // 5


// Diferencia var / let

var variable = "Soy una variable VAR"

for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable"
}

console.log(variable) // Nos va a salir "Soy la segunda variable, porque aun estando en un bloque, afecta a todo el codigo y esta se ha cambiado dentro del for"

let variablelet = "Soy una variable LET"

for (let i = 0; i < 3; i++) {
    let variablelet = "Soy la segunda variable LET"
}

console.log(variablelet) //Nos va a salir "Hola soy una variable LET, porque al usar la misma variableLET dentro del for, solamente afecta a dentro de ese for"

// Aun asi no es una buena opcion usar una misma variable que ya esta con un valor, dentro de una funcion, mejor usar otro nombre y ya.

