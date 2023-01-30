import { schemaProducto, updateSchema } from "./schemaProductoJoi.js"



export class ProductoDato{
    constructor(producto){
        const data = (schemaProducto, producto)
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.price = data.price
        this.image = data.image
    }

    actualizar(nuevoDato){
        const data = (updateSchema, nuevoDato)
        this.name = data.name ?? this.name
        this.description = data.description ?? this.description
        this.price = data.price ?? this.price
        this.image = data.image ?? this.image
    }

    asDto(){
        Object.freeze({
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
            image: this.image
    })
    }
}