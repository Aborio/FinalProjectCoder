import { CustomError } from '../config/CustomError.js'

export function validaciones(
    schema,
    data,
    errMsg = 'Data validation failed: '
  ) {
    const { value, error } = (schema ,data, {
      abortEarly: false,
      allowUnknown: true
    })
    if (error) {
      const errDetails = error.details.map((field) => ({
        message: field.message,
        key: field.context.key
      }))
      throw new CustomError(errMsg, 400, {
        type: 'Joi validation',
        fields: errDetails
      })
    } else return value
    // }
  }