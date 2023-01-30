import { Repo } from "../repositorio/repositorio.js";
import { ordenesDatos } from "./ordenesDao.js";
import { OrdersRouter } from "../routes/ordenes.js";
import { OrdenesServicio } from "./ordenesServicio.js";
import { OrdenesFabrica } from "./ordenesFabrica.js";

export const ordersRouter = OrdersRouter.getRouter()

const ordersDao = OrdenesFabrica.getDao()
const ordersRepositorio = new Repo (ordersDao, ordenesDatos)
export const ordersService = new OrdenesServicio(ordersRepositorio)