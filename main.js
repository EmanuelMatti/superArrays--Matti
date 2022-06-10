function Producto(nombre, precio, stock, IVA) {
    this.nombre = nombre.toLowerCase()
    this.precio = parseFloat(precio)
    this.stock = stock
    this.iva = 1.22
    
    this.precioFinal = function(){
       return this.precio * this.iva
    }
    this.descuentoFinal = function(unidades) {
       this.stock = this.stock - unidades
    }
     
}

let nombre = prompt("ingrese su nombre")
alert("Bienvenido" + nombre)



function agregarProducto() {
    let nombre = prompt("Ingresar nombre del producto")
    let precio = prompt("ingrese importe del producto")
    productos.push(new Producto(nombre, precio))
    if(nombre != ""|| (!isNaN(stock))){
        console.log("agregaste"+ nombre)
    } else {
        console.warn("So se pudo agregar el producto")
    }

}


function buscarProducto(){
    const buscado = productos.find(producto => producto.nombre === "PAX 3")
    console.table(buscado)

}

function filtrarProducto(){
    const locales = productos.filter(producto.IVALOCAL)
    console.log(locales)
}

function iterarProducto(){
    productos.forEach(p => {console.table(p)})

    for(const elemento of productos) {
        console.table(elemento)
    }
    
}
