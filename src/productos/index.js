import { Repo } from "../repositorio/repositorio.js";
import { ProductosDaoFabrica } from "./productoFabrica.js";
import { ProductosRouter } from "../routes/productos.js";
import { ProductoServicio } from "./productosServicio.js";
import { ProductoDato } from "./productoDao.js";

// export const productosRouter = ProductosRouter.getRouter()

const productosDao = ProductosDaoFabrica.getDao()
const productosRepositorio = new Repo(productosDao, ProductoDato)
export const productoServicio = new ProductoServicio(productosRepositorio)