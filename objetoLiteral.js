function PerroLiteral(nombre, raza, color, jugueteFav, manso, descripcion) {
    //Creando el objeto con notación literal
    const Perro = {
        nombre: nombre,
        raza: raza,
        color: color,
        jugueteFav: jugueteFav,
        manso: manso,
        descripcion: descripcion,
        Interactuar: function() {
            if (this.manso.toLowerCase() != 'si') {
                console.log(this.nombre + " es manso, asi que puedes jugar con él, no te preocupes.");
            } else {
                console.log("¡Ten cuidado! " + this.nombre + " no es manso y te puese morder :(");
            }
        },
        Comer: function() {
            console.log(this.nombre + " esta comiendo :D");
        },
        Jugar: function() {
            console.log(nombre + " está jugando con su " + this.jugueteFav)
        },
        MostrarDatos: function() {
            console.log("Nombre: " + this.nombre);
            console.log("Raza: " + this.raza);
            console.log("Color: " + this.color);
            console.log("Juguete favorito: " +this.jugueteFav);
            console.log("Es manso: " + this.manso);
            console.log("Descripcion: " + this.descripcion);
        }
    };
    return Perro;
}

exports.PerroLiteral = PerroLiteral;