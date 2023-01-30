import { logger } from './Logger.js'

export const funLogger = (req, res, next) => {
  logger.info(
    `REQUEST -- ${req.method} to ${req.path} -- ${new Date().toLocaleString()}`
  )
  next()
}