import ContenedorMongoDb from "../contenedor/contenedorMongo.js"
import { OrderSchema } from "./schemaOrdenes.js"

const ordersDao = new ContenedorMongoDb ('ordenes', OrderSchema)

export class OrdenesFabrica {
    static getDao = () => ordersDao
}