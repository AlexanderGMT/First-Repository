// Casos muy especificos - break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.lenght; i++) {

    if (lista[i] === 3) {
        continue;
    }
    console.log(lista[i]);
    // De esta forma pasa la lista y va sumando 1 al valor por cada valor de la lista, cuando llega a que i es igual a 3, continua.

    if (lista[i] > 5) {
        break;
    }
    // De esta forma pasa la lista y va sumando 1 al valor por cada valor de la lista, cuando llega a 5, como ya 5 no es > 6, el bucle para, por eso el break.


}


// Cual es el ambito de un bucle
console.log(i)
// nos marca que i no esta definida porque al usar Let para dar valor a la i arriba, solamente afecta a ese bucle, y aqui estamos fuera del bucle, si fuera Var para declarar el valor si seria el mismo.
// Let es mejor que var.

