import express from 'express';
import { autorizar } from '../config/Autorizacion.js';
import { funLogger } from '../config/funLogger.js';
// import  UserDato  from '../daos/DaoUser.js';
// import { userService } from '../user/Serviciouser.js';
import { UsersControladorRoute } from '../user/controladorUser.js';
const useControl = UsersControladorRoute.getControlador();

const userRouter = express.Router();

userRouter.use(funLogger)
userRouter.get('/users', autorizar(), useControl.getUser)
userRouter.post('/users', useControl.registrarUsuario)


export class usersRouter{
    static getRouter = () => userRouter
}