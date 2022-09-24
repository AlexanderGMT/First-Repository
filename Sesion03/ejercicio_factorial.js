// factorial de 10 utilizando un solo bucle for

let numero = 10;

let resultado = numero;

for (let i = numero -1; i > 0; i--) {
    resultado *= i
    console.log(resultado)
}



// factorial de 10 utilizando un bucle while

let num = 10;
let result = num;
let i = num - 1;

while (i > 0) {
    result *= i
    i--;
    console.log(result)
}

// factorial de 10 utilizando bucle while, continue y break.

let number = 10;
let total = number;
let x = number - 1;

while (x > 0) {

    if (x > 0) {
        total *= x;
        x--;
        console.log(total);
        continue;
    }

    if (x <= 0) {
        break;
    }
}

