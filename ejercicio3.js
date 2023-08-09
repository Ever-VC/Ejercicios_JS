/**
 * Crear al menos 4 perros tal como se explica en el punto 2 y guardarlos en un arreglo. Luego generar un arreglo nuevo
 * filtrando de manera automática la lista y mostrar un nuevo arreglo nada mas con los perros que son mansos.
*/

const moduloConstructor = require("./objetoConstructor.js");//Importa el módulo para crear el objeto constructor
const moduloLiteral = require("./objetoLiteral.js");//Importa el módulo para crear el objeto literal
let prompt = require('prompt-sync')();//Importa el módulo para hacer uso del prompt-sync
let opcion = "";
while (opcion.toLowerCase() != 's' && opcion.toLowerCase() != 'n') {
    opcion = prompt("Desea crear el Objeto perro?: (S/N) ");
    switch (opcion.toLowerCase()) {
        case 's':
            let cantidad = prompt("Ingrese el numero de objetos \"Perro\" que desea crear: ");
            let arregloPerroLiteral = [];
            let arregloPerroConstructor = [];
            
            for (let index = 0; index < cantidad; index++) {
                console.clear();
                console.log("[DATOS DEL OBJETO " + (index+1) + "/" + cantidad + "]")
                let nombre = prompt("Ingrese el nombre del perro: ");
                let raza = prompt("Ingrese la raza del perro: ");
                let color = prompt("Ingrese el color del perro: ");
                let jugueteFav = prompt("Ingrese el juguete favorito del perro: ");
                let manso = 'p'
                while (manso.toLowerCase() != "si" && manso.toLowerCase()!= "no") {
                    manso = prompt("El perro es manso? (Si/No): ");
                }
                let descripcion = prompt("Ingrese una breve descripción de su mascota: ");
            
                arregloPerroLiteral.push(moduloLiteral.PerroLiteral(nombre, raza, color, jugueteFav, manso, descripcion));
                arregloPerroConstructor.push(new moduloConstructor.PerroConstructor(nombre, raza, color, jugueteFav, manso, descripcion));
            }

            let copiaLiteral = [];
            let copiaConstructor = [];

            arregloPerroLiteral.forEach(element => {
                if (element.manso.toLowerCase() == "si") {
                    copiaLiteral.push(element);
                }
            });

            arregloPerroConstructor.forEach(element => {
                if (element.manso.toLowerCase() == "si") {
                    copiaConstructor.push(element);
                }        
            });
            console.clear();
            console.log("[MOSTRANDO LOS DATOS DE PERROS MANSOS]\n----> Objetos literales <----");
            copiaLiteral.forEach(element => {
                element.MostrarDatos();
            });
            console.log("----> Objetos constructor <----");
            copiaConstructor.forEach(element => {
                element.MostrarDatos();
            });
            
            break;
        case 'n':
            console.log("Hasta pronto! :D");
            break;
        default:
            console.log("¿" + opcion + "? ¿Es enserio?, Por favor elija una opción válida.");
            break;
    }
}


