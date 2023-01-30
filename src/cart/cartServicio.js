import { CartDato } from "./cartDato.js"


 export class CartServicio{
     constructor(repo){
         this.repo = repo
    }

    async obtenerCart (userId){
        const obj = await this.repo.getById(userId)
        if (!cart) throw Error ("No funciona Cart")

        const actualizarProductos = []
        for (let productosEnCart of cart.asDto().productos){
            try {
                const productoData = await productoService.obtenerProductoPorId(
                    productosEnCart.prod.id
                )
                actualizarProductos.push({...productosEnCart, prod:productoData})
            } catch (error) {
                cart.removekind(productosEnCart)
                
            }
        }
        const actualizarCart = await this.repo.updateById(userId, new CartDato({...cart.asDto(), producto: actualizarProductos}))
        if (!actualizarCart) throw Error ("no se puedo actualizar cart")
        return actualizarCart.asDto()
    }

    async crearCart (userId){
        const obj = await this.repo.create(
            new CartDato({
                id: userId,
                producto: []
            })
        )
        if (!obj) throw Error ("No se puedo crear cart")
        return obj.asDto()
    }

    async agregarProductoAlCart (userId, productoId){
        const cart = await this.repo.getById(userId)
        if (!cart) throw Error ("NO se encentra el cart")

        const productoData = await productoService.obtenerProductoPorId(productoId)
        cart.addProduct(productoData)

        const actualizarCart = await this.repo.updateById(userId, cart)
        if(!actualizarCart) throw Error ("no se puedo actualizar")
        return updatedCart.asDto()
    }

    async removerProdcutoDelCart (userId, productoId){
        const cart = await this.repo.getById(userId)
        if(!cart) throw Error ("No se ecuentra el cart")
        cart.removeProduct(productoId)

        const actualizarCart = await this.repo.updateById(userId, cart)
        if (!actualizarCart) throw Error ("No se puede actualizar el cart")
        return actualizarCart.asDto()

    }

    async vaciarCart (userId){
        const obj = await this.repo.getById(userId)
        if(!obj) throw Error ("No se escuentra cart")

        cart.removeAllProducts()

        const actualizarCart = await this.repo.updateById(userId, obj)
        if (!actualizarCart) throw Error ("No se actuailizo el cart")
        return actualizarCart.asDto()
    }

 }