import express from 'express'
import passport from 'passport'
import routerImagen from './routes/imagen.js'
import { usersRouter }  from './routes/user.js'
import { CartsRouter } from './routes/carts.js'
import { ProductosRouter } from './routes/productos.js'

const users = usersRouter.getRouter()
const cart = CartsRouter.getRouter()
const productos = ProductosRouter.getRouter()



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use('/static', express.static('public'))


app.use('/api/', routerImagen);
app.use('/api/', users);
app.use('/api/', cart);
app.use('/api/', productos)







app.listen(8080, ()=>{
    console.log("cuchando puerto 8080")
})