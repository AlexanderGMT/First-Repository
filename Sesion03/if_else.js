// bifurcaciones if...else

// este es un ejemplo basico, normalmente no se pone el false y el true de esa manera tan simple.
if (true) {
    console.log("Es verdadero")
}

if (false) {
    console.log("Es verdadero")

} else {
    console.log("No es verdadero")
}

// ejemplo mas real

let saldo = 50;
let efectivo = 20;

// en este sale que es true porque no hemos metido ningun else y porque ya se cumple al principio
if (efectivo < saldo) {
    console.log("Puedes sacar dinero")
}


// en este sale falso porque efectivo es menor que saldo entonces pasa al else.
if (efectivo > saldo) {
    console.log("Puedes sacar dinero")
} else {
    console.log("Saldo insuficiente")
}