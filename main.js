
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
    agregarProducto()
}



function buscarProducto(){
    const buscado = productos.find(producto => producto.nombre === "PAX 3")
    console.table(buscado)

}

buscarProducto()

function filtrarProducto(){
    const locales = productos.filter(producto.IVALOCAL)
    console.log(locales)
}

filtrarProducto()

function generadorAutomatico(){
    listProductos.push(new Producto("GRAVITY HOOKA", 18999, 50, 1.22))
    listProductos.push(new Producto("PAX 3", 14999, 100, 1.22))
    listProductos.push(new Producto("VAPER3.0", 15000, 100, 1.22))
    listProductos.push(new Producto("SMOKE.2", 13899, 100, 1.12))
    listProductos.push(new Producto("MARKSALADIX", 7899, 150, 1.12))
    listProductos.push(new Producto("DYNNAVAP VAPCAP", 21999, 50, 1.22))
}





function iterarProducto(){
    productos.forEach(p => {console.table(p)})

    for(const elemento of productos) {
        console.table(elemento)
    }
    
}

