import passport from 'passport'
import { variables } from './variables.js'

const JWT = (req, res, next, options) => async (err, user, info) => {
    try {
      if (err || !user)
        throw Error ('no estas logeado')
      if (options.admin === true && !variables.admins(user.email))
        throw Error ('no tenes permiso a esta ruta')
    } catch (err) {
      next(err)
    }
    req.user = user
    return next()
  }


export const autorizar =
  (options = { admin: false }) =>
  (req, res, next) =>
    passport.authenticate(
      'jwt',
      { session: false },
      JWT(req, res, next, options)
    )(req, res, next)
