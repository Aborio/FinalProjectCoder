import { Router } from 'express'
import { funLogger } from '../config/funLogger.js'
import { CartsController } from '../cart/controladorCart.js'

const cartsController = CartsController.getController()

const cartRouter = Router()

cartRouter.use(funLogger)
cartRouter.get('/shoppingcartproducts', cartsController.getCart)
cartRouter.post('/shoppingcartproducts/:productoId', cartsController.addProductToCart)
cartRouter.delete('/shoppingcartproducts/:productoId')

export class CartsRouter {
    static getRouter = () => cartRouter
    
}