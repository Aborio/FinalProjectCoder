import mongoose, { model } from 'mongoose'
import mongodb from '../config/mongodb.js'
mongoose.set('strictQuery', false)


export default class ContenedorMongoDb {
    #collection
    #collectionName

    constructor(collectionName, schema) {
        
        this.#collection = mongoose.model(collectionName, schema)
        this.#collectionName = collectionName
        this.connect()
    }

    async connect (){
      //colocar aca el string de coneccion 
      mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2', mongodb.options)
    }

    async getAll () {
        const items = this.#collection.find({}).select({_id:0, __v: 0}).lean()
        return items
    }

    async findById(id){
        const itemIndex = this.#collection.findOne({id}).select({_id:0, __v: 0}).lean()
        return itemIndex
    }

    async addOne(item){
        const nuevoItem = this.#collection(item)
      await nuevoItem.save()
      return nuevoItem
    }


    async updateById(id,data){
        let updatedItemIndex = await this.#collection.findByIdAndUpdate({id}, {$set : {...data}},{new:true}).select({__id:0 , __v:0}).lean()
        return updatedItemIndex
      }

    async deleteOne(id){
        const deleteItem = await this.#collection.findByIdAndRemove({id}).select({_id:0,__v: 0}).lean()
        return deleteItem
    }
    async deleteAll(){
       return await this.collection.deleteMany({})
      }

    async count(){
        return this.collection.count({})
      }
}

