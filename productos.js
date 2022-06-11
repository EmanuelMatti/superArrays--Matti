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


