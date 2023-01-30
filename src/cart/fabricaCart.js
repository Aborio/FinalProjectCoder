import ContenedorMongoDb from "../contenedor/contenedorMongo.js"
import { CartSchema } from "./cartSchema.js"

const cartsDao = new ContenedorMongoDb('carts', CartSchema)

export class CartDaoFabrica{
    static getDao = () => cartsDao
}