// Sentencias Switch

let nota = 9;

switch(nota) {
    case 5:
        console.log("Buen trabajo, sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo, pero podrias haberlo hecho mejor");
        break;
    case 3:
        console.log("Has obtenido un suficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log("No has estudiado nada, trabaja un poquito mas la proxima vez");
        break;
    default: //hay que poner siempre un caso default por si acaso no entra la nota que le pasamos en ninguno de los casos, entonces que salte este. Como el else final.
        console.log("Error")
        break;
}