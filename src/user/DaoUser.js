import { userSchema } from "./Schemauser.js"
// import { validaciones } from "./validaciones.js"

export class UserDato{
    constructor(user){
    const data = (user)
    console.log(data)
      this.id = data.id
      this.email = data.email
      this.password = data.password
      this.name = data.name
      this.lastname = data.lastname
      this.image = data.image 
    } 
     asDto = () =>
     Object.freeze({
       id: this.id,
       email: this.email,
       password: this.password,
       name: this.name,
       lastname: this.lastname,
       image: this.image
     })
}