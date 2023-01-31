import { ordenesDatos } from "./ordenesDao";
import { cartsService } from "../cart/index.js";
import { usersService } from "../user/index.js";
import { sendEmail, generateAdminEmail, generateUserEmail } from "../config/nodemailer.js";

export class OrdenesServicio{
    constructor(repo){
        this.repo = repo
    }

    async obtenerOrdenesPorUserId(clientId){
        const obj = await this.repo.getByQuery({clientId})
        return obj.map((order) => order.asDto())
    }

    async crearOrden(clientId){
        const cart = await cartsService.obtenerCart(clientId)
        if (cart.productos.length < 1)
        throw Error ("Cart vacio")

        const crearOrden = await this.repo.create(
            new ordenesDatos({
                id: undefined,
                clientId,
                prods: (cart.productos)
            })
        )
        if(!crearOrden) throw Error ("no se pudo crear orden")
        const actualizarCart = await cartsService.vaciarCart(clientId)

        const userDato = await usersService.obtenerUsuarioPorId(clientId)
        
        try {
            // Send email to admin
            await sendEmail(
              'admin',
              'Nueva orden ✔',
              generateAdminEmail(userDato, crearOrden.asDto())
            )
            // Send email to user
            await sendEmail(
              userDato.email,
              'Nos llegó tu orden ✔',
              generateUserEmail(crearOrden.asDto())
            )
          } catch (err) {
            throw err
          }
      
          return crearOrden.asDto()
        }


    }
