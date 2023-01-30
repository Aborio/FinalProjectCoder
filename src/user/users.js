import { Repo } from "../repositorio/repositorio.js";
import { userSchema } from "./Schemauser.js";

const userDao = new Repo('users', userSchema)

export class usersFab{
    static getFab = () => userDao
}