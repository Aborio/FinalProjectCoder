import { productoServicio } from "./index.js"

const productsController = {
    getProducts: async (req, res, next) => {
      try {
        const products = await productoServicio.obtenerTodosProductos()
        res.json({ products })
      } catch (err) {
        next(err)
      }
    },
    getProductById: async (req, res, next) => {
      try {
        const { productId } = req.params
        const product = await productoServicio.obtenerProductoPorId(productId)
        res.json({ product })
      } catch (err) {
        next(err)
      }
    },
    createProduct: async (req, res, next) => {
      try {
        const newProductData = req.body
        const createdProduct = await productoServicio.crearProducto(newProductData)
        res.json({ id: createdProduct.id })
      } catch (err) {
        next(err)
      }
    },
    updateProduct: async (req, res, next) => {
      try {
        const productData = req.body
        const { productId } = req.params
        const updateProduct = await productoServicio.actualizarProducto(
          productId,
          productData
        )
        res.json({ id: updateProduct.id })
      } catch (err) {
        next(err)
      }
    },
    deleteProduct: async (req, res, next) => {
      try {
        const { productId } = req.params
        const deletedProduct = await productoServicio.deleteProduct(productId)
        res.json({ id: deletedProduct.id })
      } catch (err) {
        next(err)
      }
    }
  }
  
  export class ProductsController {
    static getController = () => productsController
  }
  