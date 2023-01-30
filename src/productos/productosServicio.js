import { v4 as uuidv4 } from 'uuid'
import { ProductoDato } from './productoDao.js'


export class ProductoServicio{
    constructor(repo){
    this.repo = repo
    }

    async obtenerTodosProductos(){
        const obj = await this.repo.getAll()
        return obj.map((producto)=>producto.asDto())
    }

    async obtenerProductoPorId(productoId){
        const obj = this.repo.getById(productoId)
        if(!ob) throw Error ("producto no funciona")
        return obj.asDto()

    }

    async crearProducto (productoData){
        const crearProducto = await this.repo.create(
            new ProductoDato({
                ...productoData,
                id: uuidv4()
            })
        )
        if (!crearProducto) throw Error ("NO se puedo ejecutar")
        return crearProducto.asDto()
    }

    async actualizarProducto(productoId, nuevaData){
        const obj = await this.repo.getById(productoId)
        if (!obj) throw Error ("No se encontro producto")

        obj.update(nuevaData)

        const productoActualizado = await this.repo.updateById(productoId,obj)
        if (!productoActualizado) throw Error ("producto no funciona")
        return productoActualizado.asDto()
    }

    async eliminarProducto(productoId){
        const obj = await this.repo.deleteById(productoId)
        if (!obj) throw Error ("producto no encontrado")
        return obj.asDto()
    }

}

