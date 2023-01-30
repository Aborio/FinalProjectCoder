

export class ordenesDatos{
    constructor(orden){
        const data = (orden)
        this.id = data.id
        this.clientId = data.clientId
        this.prods = data.prods
        this.createAt = data.createAt
    }

    asDto = () =>
    Object.freeze({
      id: this.#id,
      clientId: this.#clientId,
      prods: this.#prods,
      createdAt: this.#createdAt
    })
}