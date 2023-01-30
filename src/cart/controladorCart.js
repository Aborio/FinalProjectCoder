import { cartsService } from './index.js'

const cartsController = {
    getCart: async (req, res, next) => {
        try {
          const { products } = await cartsService.obtenerCart(req.user.id)
          res.json({ products })
        } catch (err) {
          next(err)
        }
      },
      addProductToCart: async (req, res, next) => {
        try {
          const { productId } = req.params
          const updatedCart = await cartsService.agregarProductoAlCart(
            req.user.id,
            productId
          )
          res.json({ id: updatedCart.id })
        } catch (err) {
          next(err)
        }
      },
      removeFromCart: async (req, res, next) => {
        try {
          const { productId } = req.params
          const updatedCart = await cartsService.removerProdcutoDelCart(
            req.user.id,
            productId
          )
          res.json({ id: updatedCart.id })
        } catch (err) {
          next(err)
        }
      }
    }
    
    export class CartsController {
      static getController = () => cartsController
}
