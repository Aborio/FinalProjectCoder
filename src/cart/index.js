import { Repo } from "../repositorio/repositorio.js";
import { CartDaoFabrica } from "./fabricaCart.js";
import { CartsRouter } from "../routes/carts.js";
import { CartServicio } from "./cartServicio.js";
import { CartDato } from "./cartDato.js";

export const cartsRouter = CartsRouter.getRouter()

const cartsDao = CartDaoFabrica.getDao()
const cartsRepositorio = new Repo(cartsDao, CartDato )
export const cartsService = new CartServicio(cartsRepositorio)