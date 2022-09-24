// Bucles


// estos tres ejemplos significan lo mismo, es para entender que significa el i++, que es el que suele usarse porque es el mas abreviado.

// i = i + 1;

// i += 1;

// i++

// tenemos una variable que es i al comienzo, que es la inicializacion, entonces hacemos que se cumpla que si i < 10 entonces se suma + 1, y este bucle continua hasta que ese numero
// llega a 9 porque estamos haciendo que sea un bucle siempre y cuando sea < 10.

for (let i = 0; i < 10; i++) {
   // esto es el bucle
    console.log(i)
}

// en este ejemplo creamos una lista, y si queremos por ejemplo sacar un numero seria lista[2], pero aqui lo que hacemos es pasar por todos los numeros.
let lista = [1, 4, 6, 2, 3, 7, 10, 12];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2)
}


// Estructura for... of
for (let valor of lista) {
    console.log(valor)
}

// Estructura forEach

// nos printea lo mismo que arriba, reconoce la lista y forEach valor lo printea, va pasando por cada valor que hay en la lista.
lista.forEach(valor => {
    console.log(valor)
})

// Estructura for... in

let persona = {
    nombre: "Alex",
    apellido: "Gomez",
    edad: "34",
    isDeveloper: false

}

let prop = "edad";
console.log(persona.edad);


for (let propiedad in persona) {
    console.log(propiedad); // de esta forma nos printea las propiedades, nombre, apellido, edad, isDeveloper.
    console.log(persona[propiedad]); // esto nos printea de persona, en vez de las propiedades lo asignado a estas, Alex, gomez, 34, False.
}
