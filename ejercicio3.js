/**
 * Crear al menos 4 perros tal como se explica en el punto 2 y guardarlos en un arreglo. Luego generar un arreglo nuevo
 * filtrando de manera automática la lista y mostrar un nuevo arreglo nada mas con los perros que son mansos.
*/

const moduloConstructor = require("./objetoConstructor.js");//Importa el módulo para crear el objeto constructor
const moduloLiteral = require("./objetoLiteral.js");//Importa el módulo para crear el objeto literal
let prompt = require('prompt-sync')();//Importa el módulo para hacer uso del prompt-sync

let opcion = "";//Permite verificar la opción que el usuario ha digitado

//Se ejecuta cada vez que se reciba un valor diferente de lo esperado
while (opcion.toLowerCase() != 's' && opcion.toLowerCase() != 'n') {
    opcion = prompt("Desea crear el Objeto perro?: (S/N) ");
    switch (opcion.toLowerCase()) {//Verifica la opción que el usuario ha seleccionado
        case 's'://Caso en que el usuario si desea crear los objetos
            let cantidad = prompt("Ingrese el numero de objetos \"Perro\" que desea crear: ");

            //Crea los arreglos vacíos
            let arregloPerroLiteral = [];
            let arregloPerroConstructor = [];
            
            //Por medio del bucle se solicitan los datos para la cantidad de objetos que el usuario indicó que quería crear
            for (let index = 0; index < cantidad; index++) {
                console.clear();//Limpia la consola
                //Solicita los datos de cada objeto
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
                
                //Crea ambos objetos, tanto en notación literal, como con objeto constructor y los agrega a la lista correspondiente
                arregloPerroLiteral.push(moduloLiteral.PerroLiteral(nombre, raza, color, jugueteFav, manso, descripcion));
                arregloPerroConstructor.push(new moduloConstructor.PerroConstructor(nombre, raza, color, jugueteFav, manso, descripcion));
            }

            //Listas en las que se almacenarán los objetos de los perros que sean mansos
            let copiaLiteral = [];
            let copiaConstructor = [];

            //Recorre el arreglo de perros y verifica si es manso, si la condición se cumple, se agrega a la lista correspondiente
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

            console.clear();//Limpia la consola

            //Muestra los datos de los objetos haciendo uso de la función que contiene cada objeto
            console.log("[MOSTRANDO LOS DATOS DE PERROS MANSOS]\n----> Objetos literales <----");
            copiaLiteral.forEach(element => {
                element.MostrarDatos();
            });
            console.log("----> Objetos constructor <----");
            copiaConstructor.forEach(element => {
                element.MostrarDatos();
            });
            
            break;
        case 'n'://Caso en que el usuario no desea crear los objetos
            console.log("Hasta pronto! :D");
            break;
        default://Caso en que el usuario hizo una selección inválida
            console.log("¿" + opcion + "? ¿Es enserio?, Por favor elija una opción válida.");
            break;
    }
}


