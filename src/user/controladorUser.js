import { usersService } from "./index.js";
import { cartsService } from "../cart/index.js";

const userControlRoute = {
    getUser: async (req, res, next) => {
        try {
          const user = await usersService.obtenerUsuarioDetallado(req.user.id) // req.user is data from jwt
          res.json({ userData: user })
        } catch (err) {
          next(err)
        }
      },


    registrarUsuario : async (req,res,next)=>{
        try{
            const crearUsuario = await usersService.agregarUsuario(req.body)
            const crearCart = await cartsService.crearCart(crearUsuario.id)
            res.json({id : crearUsuario.id})
        }catch(err){
            next(err)
        }
    }
}

export class UsersControladorRoute {
    static getControlador = () => userControlRoute
}