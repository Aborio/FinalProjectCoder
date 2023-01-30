import { Repo } from "../repositorio/repositorio.js";
import { usersFab } from "./users.js";
import { usersRouter } from "../routes/user.js";
import { userService } from "./Serviciouser.js";
import { UserDato } from "./DaoUser.js";

// export const UsersRouter = usersRouter.getRouter()

const usersDao = usersFab.getFab()
const usersRepositorio = new Repo(usersDao, UserDato)
export const usersService = new userService(usersRepositorio)
