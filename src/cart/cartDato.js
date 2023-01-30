



export class CartDato{
    constructor(cart){
        const data = (cart)
        this.id = data.id
        this.producto = data.producto
    }

    busarEnCart = (productoId) =>{
        const obj = this.producto.findIndex((p)=> p.prod.id === productoId)
        return obj
    }

    agregarProducto = (data) =>{
        const obj = this.findInCart(data.id)
        if (obj === -1) { this.producto.push({prod: data, cant: 1})
            
        } else {
            this.producto[obj].cant += 1
        }
    }


    sacarProducto = (productoId) => {
        const obj = this.findInCart(productoId)
        if (obj === -1)
          throw Error ("Ese producto no esta en el carro")
        let productoCantidad = this.producto[obj].cant - 1
        if (productoCantidad < 1) this.removeKind(null, obj)
        else this.producto[obj].cant = productoCantidad
      }

    removeKind = (productId = undefined, index) => {
        const obj = !productId ? index : this.findInCart(productId)
        if (obj === -1)
          throw new CustomError('Product is not in cart.', 404)
        this.producto.splice(obj, 1)
      }
      removeAllProducts = () => {
        this.producto = []
      }
    
    asDto = () =>
      Object.freeze({
        id: this.id,
        products: this.products
      })
    
}