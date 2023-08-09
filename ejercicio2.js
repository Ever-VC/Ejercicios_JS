/**
 * Preguntar al usuario si desea crear un objeto perro, en caso de desear crearlo. debe colocar
 * un nombre, raza, color, juguete favorito, si es manso y descripcion de la mascota. Debe 
 * contener al menos 3 métodos para iteractuar con él. Cree el objeto tanto con notación literal
 * como con Objeto Constructor.
**/

//Importa los modulos necesarios
const moduloConstructor = require("./objetoConstructor.js");
const moduloLiteral = require("./objetoLiteral.js");
let prompt = require('prompt-sync')();

let opcion = "";

while (opcion.toLowerCase() != 's' && opcion.toLowerCase() != 'n') {
    opcion = prompt("Desea crear el Objeto perro?: (S/N) ");

    switch (opcion.toLowerCase()) {
        case 's':
            //Si el usuario desea crear los objetos, se solicitan los datos y se crean los objetos
            let nombre = prompt("Ingrese el nombre del perro: ");
            let raza = prompt("Ingrese la raza del perro: ");
            let color = prompt("Ingrese el color del perro: ");
            let jugueteFav = prompt("Ingrese el juguete favorito del perro: ");
            let manso = 'p'
            //Se ejecuta cada vez que se reciba un valor diferente del esperado
            while (manso.toLowerCase() != "si" && manso.toLowerCase()!= "no") {
                manso = prompt("El perro es manso? (Si/No): ");
            }
            let descripcion = prompt("Ingrese una breve descripción de su mascota: ");

            //Crea el objeto con notación literal
            const Perro = moduloLiteral.PerroLiteral(nombre, raza, color, jugueteFav, manso, descripcion);

            //Creando objeto constructor
            const perro = new moduloConstructor.PerroConstructor(nombre, raza, color, jugueteFav, manso, descripcion);

            let opcion = 0;//Permite verificar con cual objeto desea interactuar el usuario

            //Se ejecuta cada vez que se reciba un valor diferente de lo esperado
            while ((opcion != 1) && (opcion != 2)) {

                console.log("El objeto perro se ha creado exitosamente, ¿Cual objeto desea utilizar?");
                opcion = parseInt(prompt("1- Objeto literal. \n2- Objeto constructor. \n-> : "));

                let metodo;//Permite verificar el método que desea ejecutar el usuario
                switch (opcion) {
                    case 1://Caso en que el usuario desea interactuar con el objeto literal
                        metodo = 0;
                        console.log("El objeto literal \"Perro\" " + Perro.nombre + " se ha seleccionado exitosamente.");

                        //Se ejecuta cada vez que se reciba un valor diferente de lo esperado
                        while (metodo != 1 && metodo != 2 && metodo != 3) {
                            console.log("Seleccione qué método desea ejecutar: \n1- Interactuar. \n2- Comer. \n3- Jugar.");
                            metodo = parseInt(prompt("-> : "));
                            switch (metodo) {
                                case 1:
                                    Perro.Interactuar();
                                    break;
                                case 2:
                                    Perro.Comer();
                                    break;
                                case 3:
                                    Perro.Jugar();
                                    break;
                            
                                default:
                                        console.log("¿" + metodo + "? ¿Es enserio?, Por favor elija una opción válida.");
                                    break;
                            }
                        }
                        break;
                    case 2://Caso en que el usuario desea interactuar con el objeto constructor
                        console.log("El objeto constructor \"Perro\" con nombre " + perro.nombre + " se ha seleccionado exitosamente.");
                        metodo = 0;
                        while (metodo != 1 && metodo != 2 && metodo != 3) {
                            console.log("Seleccione qué método desea ejecutar: \n1- Interactuar. \n2- Comer. \n3- Jugar.");
                            metodo = parseInt(prompt("-> : "));
                            switch (metodo) {
                                case 1:
                                    perro.Interactuar();
                                    break;
                                case 2:
                                    perro.Comer();
                                    break;
                                case 3:
                                    perro.Jugar();
                                    break;
                            
                                default:
                                    console.log("¿" + metodo + "? ¿Es enserio?, Por favor elija una opción válida.");
                                    break;
                            }
                        }
                        break;
                
                    default:
                        console.log("¿" + opcion + "? ¿Es enserio?, Por favor elija una opción válida.");
                        break;
                }
            }
            break;
        case 'n':
            console.log("Hasta pronto! :D");
            break;
    
        default:
            console.log("¿" + opcion + "? ¿Es enserio?, Por favor elija una opción válida.");
            break;
    } 
}


