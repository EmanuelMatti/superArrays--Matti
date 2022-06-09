class Moneda {
    constructor(nombre, valor, comision) {
        this.nombre = nombre
        this.valor = valor
        this.comision = comision

        this.cotizacionFinal = function () {
            return this.valor = this.valor * this.comision
        }

    }
}

let plata = prompt("Ingrese moneda a cambiar")

    if(plata != "euros") {
        alert("Ingrese otra moneda")

    } else if(plata != "libra"){
        alert("Ingrese otra moneda") 

    } else if(plata != "real"){
        alert("Ingrese otra moneda")

    } else if (plata !="dolar"){
        alert("Ingrese otra moneda")
    }

let monto = prompt("Ingrese monto a convertir en" + plata)
