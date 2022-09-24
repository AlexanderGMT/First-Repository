// break y continue
// labels (poco conocida y poco utilizada, pero puede sacarte de un apuro)

// los labels(etiquetas) nos permiten etiquetar los bucles.

let unidades = 0
let decenas = 0

bucleDecenas: while(true) {
    bucleUnidades: while (true) {
        console.log(`El numero actual es: ${decenas}${unidades}`)
        unidades++ // lo mismo que unidades = unidades + 1
        if (unidades === 10) {
            unidades = 0
            break bucleUnidades
            // si las unidades son igual a 10, entonces unidades vuelve a ser 0
        }
    } // aqui sumamos decenas + 1 cada vez que pasa, si decenas es = 2, break.
    if (decenas === 2) {
        break bucleDecenas
    }
    decenas++
}
console.log("Ya hemos terminado")
