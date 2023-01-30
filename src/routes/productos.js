import { Router } from 'express'
import { autorizar } from '../config/Autorizacion.js'
import { funLogger } from '../config/funLogger.js'
import { ProductsController } from '../productos/productosControlador.js'

const productosController = ProductsController.getController()

const productosRouter = Router()

productosRouter.use(funLogger)
productosRouter.get('/products', productosController.getProducts)
productosRouter.get('/products/:productId', productosController.getProductById)
productosRouter.post('/products',autorizar({ admin : true}), productosController.createProduct)
productosRouter.put('/products/:productId',autorizar({ admin : true}), productosController.updateProduct)
productosRouter.delete('/products/:productId',autorizar({ admin : true}),productosController.deleteProduct)


export class ProductosRouter{
    static getRouter = () => productosRouter
}