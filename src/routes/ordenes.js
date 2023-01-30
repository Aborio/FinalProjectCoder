import { Router } from "express";
import { autorizar } from "../config/Autorizacion.js";
import { funLogger } from "../config/funLogger.js";
import { OrdersController } from "../ordenes/ordenesControlado.js";
const ordersController = OrdersController.getController()

const ordenesRouter = Router()

ordenesRouter.use(funLogger)
ordenesRouter.get('/orders',autorizar(), ordersController.getOrdersByUserId)
ordenesRouter.post('/orders',autorizar(), ordersController.sendOrder)

export class OrdersRouter {
    static getRouter = () => ordenesRouter
  }