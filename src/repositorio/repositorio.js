

export class Repo {
    constructor(dao, Model){
        this.dao = dao
        this.Model = Model
    }

    async obtenerId (id){
        const obj = await this.dao.findById(id)
       return obj ? new this.Model(obj): undefined
    }

    async obtenerPorDato (dato) {
         const obj = await this.dao.findById(dato)
         return obj.map((result)=> new this.Model(result))
     }

    async obtenerTodos (){
        const obj = await this.dao.getAll()
        return obj.map((result)=> new this.Model(result))
    }

    async crear(item){
        const crearItem = await this.dao.addOne(item)
        return crearItem ? new this.Model(crearItem) : undefined
    }

    async actualizarPorId(id, nuevaData){
        const actualizarData = await this.dao.updateById(id, nuevaData)
        return actualizarData ? new this.Model(actualizarData) : undefined
    }

    async eliminarPorId(id){
        const eliminarId = await this.dao.deleteOne(id)
        return eliminarId ? new this.Model(eliminarId) : undefined
    }
}