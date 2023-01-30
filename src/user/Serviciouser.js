import { v4 as uuidv4 } from 'uuid'
import { UserDato } from './DaoUser.js'
import bcrypt from 'bcrypt'

const controlPassword = (password) =>{
    if(!password) throw Error ("No colocaste password")
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

const validarPassword = (user, password) =>{
    bcrypt.compareSync(password, user.password)
}


export class userService{
    constructor(repo){
        this.repo = repo
    }

    async obtenerUsuarioPorId(userId){
        const user = await this.repo.getById(userId)
        if(!user) throw Error ("Coloque usuario")
        return user.asDto()
    }

    async obtenerUsuarioDetallado (userId){
        const user = await this.repo.getById(userId)
        if(!user) throw Error ("No hay usuario")
        return {
            ...user.asDto(),
            password: undefined,
            admin: undefined
        }
    }

    async agregarUsuario(userData){
        const nuevoUsuario = new UserDato({
            ...userData,
            id:uuidv4(),
            password: controlPassword(userData.password)
        })

        const [usuarioExistente] = await this.repo.getByQuery({
            email: userData.email
        })
        if (usuarioExistente) throw Error ("Ya existe usuario con este email")

        const crearUser = await this.repo.create(nuevoUsuario)
        if(!crearUser) throw Error ("no se pudo crear")
        return crearUser.asDto()
    }

    async logear (email, password){
        const [user] = await this.repo.getByQuery({email})
        if (!user) throw Error ("Usuario no encontrado")

        if(!validarPassword(user.asDto(), password))
        throw Error ("error en certificaciones")
        return user
    }
}