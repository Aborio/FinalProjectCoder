import ContenedorMongoDb from "../contenedor/contenedorMongo.js"
import { schemaProducto } from "./schemaproducto.js"

const productosDao = new ContenedorMongoDb('products', schemaProducto)

export class ProductosDaoFabrica{
    static getDao = () => productosDao
}