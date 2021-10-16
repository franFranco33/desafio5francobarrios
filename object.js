class Cotizacion {

    constructor( nombre, precio, supply) {
    
        this.nombre = nombre;
        this.precio = precio;
        this.supply = supply;
    }
    getPrecioEnDolares() {
        return this.precio
    }
    getPrecioEnPesos() {
        return this.precio * 200
    }
}

const criptomoneda1 = new Cotizacion('Bitcoin', '60000', '19000000')
const criptomoneda2 = new Cotizacion('Moc', 0.13, 1400000000)
console.log(criptomoneda1.getPrecioEnDolares());
console.log(criptomoneda1.getPrecioEnPesos())
console.log(criptomoneda2.getPrecioEnDolares());
console.log(criptomoneda2.getPrecioEnPesos())