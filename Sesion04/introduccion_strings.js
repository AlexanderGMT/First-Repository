// Strings (cadenas de caracteres)

let str_dbl = "Hola soy un texto";
console.log(str_dbl)

let str_sng = 'Hola soy un texto con comillas simples'
console.log(str_sng)


let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"'
console.log(str_comillas_simples)

let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'"
console.log(str_comillas_dobles)

let str_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\""
console.log(str_comillas)

// comillas invertidas ( backticks )

let str_backticks = `Hola esto es un string con backticks`
console.log(str_backticks)

let nombre = "Alexander";
let saludo = `Hola, ${nombre} bienvenido` // al usar las comillas invertidas, podemos introducir otras variables dentro de nuestro texto usando ${}
console.log(saludo)

// Plantillas HTML

// gracias a las comillas invertidas podriamos incluso escribir codigo html y variables de por medio gracias a ellas, tambien nos permiten el salto de linea.

let plantilla = 
`<html>
    <h1>Pagina web de ${nombre} </h1>
    <p> Este es un parrafo</p>
</html>`
console.log(plantilla)

/// Introduccion de variables en html

let libros = ["Empieza por el por que", "El monje que vendio su ferrari", "El poder del ahora"]









