// Bucles while

let i = 0;
let max = 10;

while (i < max) {
    console.log(i);
    i++; // con esta linea rompemos el bucle para que no sea infinite, porque i siempre es menor que max entonces nunca pararia, entonces con i++ sumamos 1 a i cada vez que pasa el bucle.
}

// Do...while
i = 15;

do {
    i++;
} while (i < max)
console.log(i)

// Este do while hace que i suma + 1 si i < max, en este ejemplo vemos que aun que i = 15 y no deberia de sumar, como el i++ esta antes que while, siempre se va a ejecutar al menos una vez.
