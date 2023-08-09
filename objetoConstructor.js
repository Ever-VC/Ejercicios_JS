function PerroConstructor(nombre, raza, color, jugueteFav, manso, descripcion) {
    this.nombre = nombre;
    this.raza = raza;
    this.color = color;
    this.jugueteFav = jugueteFav;
    this.manso = manso;
    this.descripcion = descripcion;
    this.Interactuar = function() {
        if (this.manso.toLowerCase() != 'si') {
            console.log(nombre + " es manso, asi que puedes jugar con él, no te preocupes.");
        } else {
            console.log("¡Ten cuidado! " + nombre + " no es manso y te puese morder :(");
        }
    };
    this.Comer = function() {
        console.log(nombre + " esta comiendo :D");
    };
    this.Jugar = function() {
        console.log(nombre + " está jugando con su " + jugueteFav)
    };
    this.MostrarDatos = function() {
        console.log("Nombre: " + this.nombre);
        console.log("Raza: " + this.raza);
        console.log("Color: " + this.color);
        console.log("Juguete favorito: " +this.jugueteFav);
        console.log("Es manso: " + this.manso);
        console.log("Descripcion: " + this.descripcion);
    };
}


exports.PerroConstructor = PerroConstructor;
