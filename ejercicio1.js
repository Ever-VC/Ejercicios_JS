/**
 * Solicitar al usuario que ingrese 3 números. Cree una función que determine el mayor, 
 * menor y el número del centro.
**/

//Recibe una lista de 3 números y busca dentro de ella el número mayor, menor y el que está en el centro.
const MostrarCentroMayorMenor = (numeros) => {
    suma = 0;//Almacena la suma de todos los números, así será más fácil encontrar el número que está en el centro.

    numeros.forEach(numero => {//Almacena la suma de los números
        suma += numero;
    });

    const mayor = Math.max(...numeros);//Almacena el número mayor
    const menor = Math.min(...numeros);//Almacena el número menor

    //Muestra los datos
    console.log("El numero mayor es: ", mayor );
    console.log("El numero menor es: ", menor );
    console.log("El numero del medio es: ", suma - (mayor + menor));//Hace el cálculo para mostrar el número del centro
}
//Importa la libreria necesaria
let prompt = require('prompt-sync')();

let numeros = [];//Crea el arreglo vacío

for (let index = 0; index < 3; index++) {//Solicita al usuario los números para evaluar
    numeros[index] = parseInt(prompt("Ingrese el numero: "));
}

MostrarCentroMayorMenor(numeros);//Llama a la función para evaluar el arreglo que se envía como parámetro

