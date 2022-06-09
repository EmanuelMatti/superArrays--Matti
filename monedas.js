



class Moneda {
    constructor(nombre, valor, comision) {
        this.nombre = nombre.toUpperCase();
        this.valor = parseFloat(valor)
        this.comision = comision
    }
        resultadoComi() {
            this.valor = this.valor * 1.11;
        }
        

    
}

const monedas = [];
moneda.push(new Moneda("dolar", 121.05, 1.11 ))
mondeda.push(new Moneda("euro", 129.36, 1.11))
moneda.push(new Moneda("libra", 152.33, 1.11))
moneda.push(new Moneda("real", 24.98, 1.11))

