import Joi from 'joi'

export const schemaProducto = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().min(3).max(150).required(),
  description: Joi.string().max(500).empty('').default(''),
  price: Joi.number().min(1).required(),
  image: Joi.string()
})

export const updateSchema = Joi.object({
  id: Joi.string().forbidden(),
  name: Joi.string().min(3).max(150),
  description: Joi.string().max(500).empty('').default(''),
  price: Joi.number().min(1),
  image: Joi.string()
})